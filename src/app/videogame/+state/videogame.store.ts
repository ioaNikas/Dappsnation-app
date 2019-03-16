import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Videogame } from './videogame.model';

export interface State extends EntityState<Videogame>, ActiveState<string> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'videogames', idKey: 'id' })
export class VideogameStore extends EntityStore<State, Videogame> {
  constructor() {
    super();
  }

}
