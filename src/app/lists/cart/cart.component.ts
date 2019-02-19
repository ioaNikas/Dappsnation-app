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
  public displayedColumns: string[] = ['title', 'genre', 'releaseDate', 'price', 'details', 'update', 'delete'];

  constructor(private videogameService: VideogameService) { }

  ngOnInit() {
    this.myCart = this.videogameService.getMyCart();
    console.log(this.myCart);
  }
}