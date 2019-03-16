import { Component } from '@angular/core';
import { VideogameStore } from './videogame/+state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Dappsnation-app';

  constructor(
    private videogameStore: VideogameStore,
    private router: Router,
    ) { }

  public addVideogame() {
    this.videogameStore.setActive(null);
    this.router.navigate(['/form/add']);
  }
}
