import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cart/+state/cartItem.model';
import { CartItemService } from 'src/app/cart/+state/cartItem.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public myCart$: Observable<CartItem[]>;
  public displayedColumns: string[] = ['title', 'genre', 'releaseDate', 'price', 'details', 'remove'];

  public isRemoved = false;
  //public totalCost: number = this.cartItemService.getTotalCost(this.myCart$);

  constructor(private cartItemService: CartItemService) { }

  ngOnInit() {
    this.myCart$ = this.cartItemService.cartItemt$;
  }

  removeItemFromCart(cartItem: CartItem) {
    this.cartItemService.removeItemFromCart(cartItem);
    this.isRemoved = true;
  }

}
