import { Component, OnInit } from '@angular/core';
import { Videogame } from 'src/app/classes/videogame';
import { VideogameService } from 'src/app/services/videogame.service';
import { ActivatedRoute } from '@angular/router';

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
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.videogame = this.videogameService.getVideogame(id);
  }

}
