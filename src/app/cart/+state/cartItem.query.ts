import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { State, CartItemStore } from './cartItem.store';
import { CartItem } from './cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartItemQuery extends QueryEntity<State, CartItem> {

  constructor(protected store: CartItemStore) {
    super(store);
  }

}
