import { Injectable } from '@angular/core';
import { createVideogame, Videogame } from './videogame.model';
import { VideogameStore } from './videogame.store';
import { VideogameQuery } from './videogame.query';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  public videogameList$ = this.db.collection<Videogame>('videogames').valueChanges().pipe(
    tap(videogames => this.videogameStore.set(videogames))
  );

  constructor(
    private videogameStore: VideogameStore,
    private db: AngularFirestore,
  ) {
  }

  public addVideogame(_videogame: Partial<Videogame>) {
    const videogame = createVideogame( {
      ..._videogame,
      id: this.db.createId()
    });
    this.videogameStore.add(videogame);
    return this.db.collection<Videogame>('videogames').doc(videogame.id).set(videogame);
  }

  public updateVideogame(videogame: Videogame, form) {
    videogame = {...videogame, ...form};
    return this.db.collection<Videogame>('videogames').doc(videogame.id).update(videogame);
  }

  public deleteVideogame(videogame: Videogame) {
    return this.db.collection<Videogame>('videogames').doc(videogame.id).delete();
  }

}

