import { Component, OnInit } from '@angular/core';
import { Videogame } from 'src/app/classes/videogame';
import { VideogameService } from 'src/app/services/videogame.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  public videogame: Videogame;
  private _title: string;
  private nextTitle: string;
  game$;

  constructor(
    private videogameService: VideogameService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.game$ = this.route.params.pipe(
      map(params => params['title']),
      map(title => this.videogameService.getVideogame(title))
    );
}

  addToCart(videogame: Videogame) {
    this.videogameService.addToCart(videogame);
    this.router.navigate(['/shopping-cart']);
  }

  viewNextGame() {
    if (this.videogameService.getVideogameList().indexOf(this.videogameService.getNextGame(this._title)) < this.videogameService.getVideogameList().length) {
      this._title = this.videogameService.getNextGame(this._title).title;
    } else {
      this._title = this.videogameService.getVideogameList()[0].title;
    }
    this.router.navigate(['/home/game-details', this._title]);
    console.log(this._title);
  }

}