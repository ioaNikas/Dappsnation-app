import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Videogame, VideogameQuery } from 'src/app/videogame/+state';
import { CartItemService } from 'src/app/cart/+state';
import { Observable } from 'rxjs';
import { AuthQuery, User } from 'src/app/auth/+state';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  public videogame$: Observable<Videogame>;
  public user$: Observable<User>;

  constructor(
    private cartItemService: CartItemService,
    private videogameQuery: VideogameQuery,
    private authQuery: AuthQuery,
    private router: Router,
  ) { }

  ngOnInit() {
    this.videogame$ = this.videogameQuery.selectActive();
    this.user$ = this.authQuery.select(state => state.user);
  }

  public addToCart(videogame: Videogame, customerId: string) {
    this.cartItemService.addItemToCart(videogame, customerId);
    this.router.navigate(['/shopping-cart']);
  }

}
