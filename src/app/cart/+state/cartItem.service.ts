import { Injectable } from '@angular/core';
import { createCartItem, CartItem } from './cartItem.model';
import { CartItemStore } from './cartItem.store';
import { CartItemQuery } from './cartItem.query';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  public cartItemCollection: AngularFirestoreCollection<CartItem>;
  public collectionName = 'cart';
  public cartItemt$ = this.cartItemQuery.selectAll();

  constructor(
    private cartItemStore: CartItemStore,
    private cartItemQuery: CartItemQuery,
    private db: AngularFirestore,
  ) {
    this.cartItemCollection = this.db.collection<CartItem>(this.collectionName);
  }

  public addItemToCart(_cartItem: CartItem) {
    const cartItem = createCartItem({..._cartItem, id: this.db.createId()});
  }

  public removeItemFromCart(cartItem: CartItem) {
    return this.cartItemCollection.doc(cartItem.id).delete();
  }
}
