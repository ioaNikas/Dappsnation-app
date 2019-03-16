import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Videogame, VideogameQuery } from 'src/app/videogame/+state';
import { CartItemService } from 'src/app/cart/+state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  public videogame$: Observable<Videogame>;

  constructor(
    private cartItemService: CartItemService,
    private videogameQuery: VideogameQuery,
    private router: Router,
  ) { }

  ngOnInit() {
    this.videogame$ = this.videogameQuery.selectActive();
  }

  public addToCart(videogame: Videogame) {
    this.cartItemService.addItemToCart(videogame);
    this.router.navigate(['/shopping-cart']);
  }

}
