import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideogameService, Videogame, VideogameQuery, VideogameStore } from 'src/app/videogame/+state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User, AuthQuery } from '../auth/+state';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  public videogameList$: Observable<Videogame[]>;
  public isDeleted = false; // boolean showing message when a game is removed from the list.
  public isAlive = true;

  public user$: Observable<User>;

  constructor(
    private videogameService: VideogameService,
    private authQuery: AuthQuery,
    private videogameQuery: VideogameQuery,
    private videogameStore: VideogameStore,
    private router: Router,
    ) { }

  ngOnInit() {
    this.videogameList$ = this.videogameQuery.selectAll();

    this.videogameService.videogameList$
      .pipe(takeWhile(() => this.isAlive))
      .subscribe();

    this.user$ = this.authQuery.select(state => state.user);
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

  ngOnDestroy() {
    this.isAlive = false;
  }

}
