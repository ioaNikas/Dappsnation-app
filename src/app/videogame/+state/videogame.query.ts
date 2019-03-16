import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { State, VideogameStore } from './videogame.store';
import { Videogame } from './videogame.model';

@Injectable({
  providedIn: 'root'
})
export class VideogameQuery extends QueryEntity<State, Videogame> {

  public videogameList$ = this.selectAll();

  constructor(protected store: VideogameStore) {
    super(store);
  }

}
