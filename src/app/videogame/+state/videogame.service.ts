import { Injectable } from '@angular/core';
import { createVideogame, Videogame } from './videogame.model';
import { VideogameStore } from './videogame.store';
import { VideogameQuery } from './videogame.query';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  public videogameCollection: AngularFirestoreCollection<Videogame>;
  public collectionName = 'videogames';

  constructor(
    private videogameStore: VideogameStore,
    private videogameQuery: VideogameQuery,
    private db: AngularFirestore,
  ) {
    this.videogameCollection = this.db.collection<Videogame>(this.collectionName);
    this.fetch();
  }

  public fetch() {
    this.videogameCollection.valueChanges().subscribe((videogames: Videogame[]) => {
      this.videogameStore.set(videogames);
    });
  }

  public addVideogame(_videogame: Partial<Videogame>) {
    const videogame = createVideogame( {
      ..._videogame,
      id: this.db.createId()
    });
    this.videogameStore.add(videogame);
    return this.videogameCollection.doc(videogame.id).set(videogame);
  }

  public updateVideogame(videogame: Videogame, form) {
    videogame = {...videogame, ...form};
    return this.videogameCollection.doc(videogame.id).update(videogame);
  }

  public deleteVideogame(videogame: Videogame) {
    return this.videogameCollection.doc(videogame.id).delete();
  }

  public getVideogame(id: string): Observable<Videogame> {
    return this.videogameCollection.doc(id).get().pipe(
      map(videogame => videogame.data() as Videogame)
    );
  }
}
