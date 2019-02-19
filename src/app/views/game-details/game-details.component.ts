import { Component, OnInit } from '@angular/core';
import { Videogame } from 'src/app/classes/videogame';
import { VideogameService } from 'src/app/services/videogame.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  public videogame: Videogame;

  constructor(
    private videogameService: VideogameService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const title = this.route.snapshot.params['title'];
    this.videogame = this.videogameService.getVideogame(title);
  }

  addToCart(videogame : Videogame) {
    this.videogameService.addToCart(videogame);
    this.router.navigate(['/shopping-cart']);
  }

}