import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './lists/list/list.component';
import { CreateComponent } from './forms/create/create.component';
import { GameDetailsComponent } from './views/game-details/game-details.component';
import { CartComponent } from './lists/cart/cart.component';
import { ErrorComponent } from './views/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ListComponent },
  { path: 'game-details/:id', component: GameDetailsComponent },
  { path: 'form/:id', component: CreateComponent },
  { path: 'form/add', component: CreateComponent },
  { path: 'shopping-cart', component: CartComponent },
  { path: 'shopping-cart/game-details/:title', component: GameDetailsComponent },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
