import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/services/videogame.service';
import { Videogame } from 'src/app/classes/videogame';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public myCart: Videogame[] = this.videogameService.getMyCart();
  public displayedColumns: string[] = ['title', 'genre', 'releaseDate', 'price', 'details', 'remove'];

  public isRemoved: boolean = false;
  public totalCost: number = this.videogameService.getTotalCost(this.myCart);

  constructor(private videogameService: VideogameService) { }

  ngOnInit() {
  }

  removeFromCart(id : string) : void {
    this.videogameService.removeFromCart(id);
    this.myCart = this.videogameService.getMyCart();
    this.totalCost = this.videogameService.getTotalCost(this.myCart);
    this.isRemoved = true;
  }

}