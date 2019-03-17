import { Injectable } from '@angular/core';
import { createCartItem, CartItem } from './cartItem.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Videogame } from 'src/app/videogame/+state';
import { CartItemStore } from './cartItem.store';
import { tap, switchMap } from 'rxjs/operators';
import { CartItemQuery } from './cartItem.query';
import { AuthQuery } from 'src/app/auth/+state';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  public userCart$ = this.authQuery.select(state => state.user).pipe(
    switchMap(user => this.db.collection<CartItem>('cart', ref => ref.where('customerId', '==', user.id)
          )
          .valueChanges()
          .pipe(tap(cartItems => this.cartItemStore.set(cartItems)))
    )
  );

  constructor(
    private db: AngularFirestore,
    private cartItemStore: CartItemStore,
    private authQuery: AuthQuery,
  ) {}

  public addItemToCart(videogame: Videogame, _customerId) {
    const cartItem = createCartItem({...videogame, id: this.db.createId(), videogameId: videogame.id, customerId: _customerId});
    this.db.collection<CartItem>('cart').doc(cartItem.id).set(cartItem);
  }

  public removeItemFromCart(cartItem: CartItem) {
    this.db.collection<CartItem>('cart').doc(cartItem.id).delete();
  }

}
