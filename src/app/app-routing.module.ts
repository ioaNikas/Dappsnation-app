import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './lists/list/list.component';
import { CreateComponent } from './forms/create/create.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'add-game', component: CreateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
