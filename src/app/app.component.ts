import { Component } from '@angular/core';
import { VideogameService } from './services/videogame.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dappsnation-app';

  constructor(public videogameService : VideogameService) { }

}
