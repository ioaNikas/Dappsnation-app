import { Injectable } from '@angular/core';
import { Videogame } from '../classes/videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  public dummyList : Videogame[] = [
    {
      id : "1",
      title : "20XX",
      genre : "Action",
      developer : "Fire Hose Games",
      publisher : "Batterystaple Games",
      releaseDate : "16/08/2016",
      rating : "E",
      cover : "https://www.mobygames.com/images/covers/l/493281-20xx-xbox-one-front-cover.jpg",
      price : 19.99
    },
    {
      id : "2",
      title : "Rocket League",
      genre : "Sport",
      developer : "Psyonix Inc",
      publisher : "Psyonix Inc",
      releaseDate : "07/07/2015",
      rating : "E",
      cover : "https://www.mobygames.com/images/covers/l/441545-rocket-league-xbox-one-front-cover.jpg",
      price : 19.99
    },
    {
      id : "3",
      title : "Starbound",
      genre : "Adventure",
      developer : "Chucklefish",
      publisher : "Chucklefish",
      releaseDate : "22/07/2016",
      rating : "T",
      cover : "https://gpstatic.com/acache/37/31/1/fr/packshot-d8b1c95b799532bb9da622a92cafd17d.jpg",
      price : 13.99
    },
  ]

  constructor() { }

  public setLocalStorageVideogameList(videogameList: Videogame[]): void {
    localStorage.setItem('videogameList', JSON.stringify({ videogameList}));
  }

  public getVideogameList(): Videogame[] {
    let localStorageItem = JSON.parse(localStorage.getItem('videogameList'));
    return localStorageItem == null ? this.dummyList : localStorageItem.videogameList;
  }

}
