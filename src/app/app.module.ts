import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './lists/list/list.component';
import { CartComponent } from './lists/cart/cart.component';
import { CreateComponent } from './forms/create/create.component';
import { UpdateComponent } from './forms/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CartComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
