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
  public displayedColumns: string[] = ['cover', 'informations', 'actions'];

  public isDeleted : boolean = false;

  ngOnInit() {
    this.videogameList = this.videogameService.getVideogameList();
  }

  removeVideogame(id : string) : void {
    this.videogameService.removeVideogame(id);
    this.isDeleted = true;
    this.videogameList = this.videogameService.getVideogameList();
  }

}
