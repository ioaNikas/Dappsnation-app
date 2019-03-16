import { Component, OnInit } from '@angular/core';
import { VideogameService, Videogame, VideogameQuery, VideogameStore } from 'src/app/videogame/+state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private videogameService: VideogameService,
    private videogameQuery: VideogameQuery,
    private videogameStore: VideogameStore,
    private router: Router,
    ) { }

  public videogameList$: Observable<Videogame[]>;
  public displayedColumns: string[] = ['cover', 'informations', 'actions'];
  public isDeleted = false; // boolean showing message when a game is removed from the list.

  public dataSource = this.videogameList$;

  ngOnInit() {
    this.videogameList$ = this.videogameQuery.videogameList$;
  }

  public deleteVideogame(videogame: Videogame) {
    this.videogameService.deleteVideogame(videogame);
    this.isDeleted = true;
  }

  public selectVideogame(videogame: Videogame) {
    this.videogameStore.setActive(videogame.id);
    this.router.navigate(['/game-details/', videogame.id]);
  }

  public updateVideogame(videogame: Videogame) {
    this.videogameStore.setActive(videogame.id);
    this.router.navigate(['/form/', videogame.id]);
  }

}
