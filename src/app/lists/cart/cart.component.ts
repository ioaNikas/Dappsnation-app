import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/services/videogame.service';
import { Videogame } from 'src/app/classes/videogame';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public myCart: Videogame[];
  public displayedColumns: string[] = ['title', 'genre', 'releaseDate', 'price', 'details', 'remove'];

  public isRemoved: boolean = false;

  constructor(private videogameService: VideogameService) { }

  ngOnInit() {
    this.myCart = this.videogameService.getMyCart();
    console.log(this.myCart);
  }

  removeFromCart(id : string) : void {
    this.videogameService.removeFromCart(id);
    this.myCart = this.videogameService.getMyCart();
    this.isRemoved = true;
  }
}