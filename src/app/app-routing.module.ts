import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './lists/list/list.component';
import { CreateComponent } from './forms/create/create.component';
import { UpdateComponent } from './forms/update/update.component';
import { GameDetailsComponent } from './views/game-details/game-details.component';
import { CartComponent } from './lists/cart/cart.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'add-game', component: CreateComponent },
  { path: 'home/update-game/:id', component: UpdateComponent },
  { path: 'home/game-details/:id', component: GameDetailsComponent },
  { path: 'shopping-cart', component: CartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
