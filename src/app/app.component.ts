import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideogameStore } from './videogame/+state';
import { Router } from '@angular/router';
import { AuthService, User, AuthQuery } from './auth/+state';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartItemService, CartItemQuery, CartItem } from './cart/+state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Dappsnation-app';
  public user$: Observable<User>;
  public isAlive = true;
  public cartItems: Observable<CartItem[]>;

  constructor(
    private videogameStore: VideogameStore,
    private router: Router,
    private authService: AuthService,
    private authQuery: AuthQuery,
    private cartItemQuery: CartItemQuery,
    ) { }


  ngOnInit() {
    this.authService.subscribeOnUser().pipe(takeWhile(() => this.isAlive)).subscribe();
    this.user$ = this.authQuery.select(state => state.user);
    this.cartItems = this.cartItemQuery.selectAll();
  }

  public addVideogame() {
    this.videogameStore.setActive(null);
    this.router.navigate(['/form/add']);
  }

  public logout() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
