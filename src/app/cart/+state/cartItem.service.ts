import { Injectable } from '@angular/core';
import { createCartItem, CartItem } from './cartItem.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Videogame } from 'src/app/videogame/+state';
import { CartItemStore } from './cartItem.store';
import { tap } from 'rxjs/operators';
import { CartItemQuery } from './cartItem.query';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(
    private db: AngularFirestore,
    private cartItemStore: CartItemStore,
    private cartItemQuery: CartItemQuery,
  ) {
    this.fetch();
  }

  public fetch() {
    this.db.collection<CartItem>('cart').valueChanges().subscribe((cartItems: CartItem[]) => {
      this.cartItemStore.set(cartItems);
    });
  }

  public addItemToCart(videogame: Videogame) {
    const cartItem = createCartItem({...videogame, id: this.db.createId(), videogameId: videogame.id});
    this.db.collection<CartItem>('cart').doc(cartItem.id).set(cartItem);
  }

  public removeItemFromCart(cartItem: CartItem) {
    this.db.collection<CartItem>('cart').doc(cartItem.id).delete();
  }

}
