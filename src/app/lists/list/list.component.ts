import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/services/videogame.service';
import { Videogame } from 'src/app/classes/videogame';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private videogameService : VideogameService) { }

  public videogameList : Videogame[];
  public displayedColumns: string[] = ['title', 'genre', 'releaseDate', 'price'];

  ngOnInit() {
    this.videogameList = this.videogameService.getVideogameList();
    console.log(this.videogameList);
  }

}
