import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartItem } from 'src/app/cart/+state/cartItem.model';
import { CartItemService } from 'src/app/cart/+state/cartItem.service';
import { Observable } from 'rxjs';
import { CartItemQuery } from './+state';
import { VideogameStore } from '../videogame/+state';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  public myCart$: Observable<CartItem[]>;
  public displayedColumns: string[] = ['title', 'genre', 'releaseDate', 'price', 'details', 'remove'];

  public isRemoved = false;
  public isAlive = true;

  constructor(
    private cartItemService: CartItemService,
    private cartItemQuery: CartItemQuery,
    private videogameStore: VideogameStore,
    private router: Router,
    ) { }

  ngOnInit() {
    this.myCart$ = this.cartItemQuery.selectAll();

    this.cartItemService.userCart$
      .pipe(takeWhile(() => this.isAlive))
      .subscribe();
  }

  public removeItemFromCart(cartItem: CartItem) {
    this.cartItemService.removeItemFromCart(cartItem);
    this.isRemoved = true;
  }

  public goToVideogameDetails(videogameId) {
    this.videogameStore.setActive(videogameId);
    this.router.navigate(['/game-details/', videogameId]);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

}
