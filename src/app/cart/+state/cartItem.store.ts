import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { CartItem } from './cartItem.model';

export interface State extends EntityState<CartItem> {}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'cart' })
export class CartItemStore extends EntityStore<State, CartItem> {
  constructor() {
    super();
  }

}
