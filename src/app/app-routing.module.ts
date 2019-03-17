import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { GameDetailsComponent } from './views/game-details/game-details.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './views/error/error.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'home', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'game-details/:id', component: GameDetailsComponent, canActivate: [AuthGuard] },
  { path: 'form/:id', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'form/add', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'shopping-cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
