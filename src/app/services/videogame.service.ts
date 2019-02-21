import { Injectable } from '@angular/core';
import { Videogame } from '../classes/videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  public dummyList: Videogame[] = [
    {
      id: this.generateRandomId(),
      title: "20XX",
      genre: "Action",
      developer: "Fire Hose Games",
      publisher: "Batterystaple Games",
      releaseDate: "16/08/2016",
      rating: "10+",
      cover: "https://www.mobygames.com/images/covers/l/493281-20xx-xbox-one-front-cover.jpg",
      price: "19.99"
    },
    {
      id: this.generateRandomId(),
      title: "Rocket League",
      genre: "Sport",
      developer: "Psyonix Inc",
      publisher: "Psyonix Inc",
      releaseDate: "07/07/2015",
      rating: "E (Everyone)",
      cover: "https://www.mobygames.com/images/covers/l/441545-rocket-league-xbox-one-front-cover.jpg",
      price: "19.99"
    },
    {
      id: this.generateRandomId(),
      title: "Starbound",
      genre: "Adventure",
      developer: "Chucklefish",
      publisher: "Chucklefish",
      releaseDate: "22/07/2016",
      rating: "12+",
      cover: "https://gpstatic.com/acache/37/31/1/fr/packshot-d8b1c95b799532bb9da622a92cafd17d.jpg",
      price: "13.99"
    },
    {
      id: this.generateRandomId(),
      title: "World of Warcraft",
      genre: "MMORPG",
      developer: "Blizzard",
      publisher: "Blizzard",
      releaseDate: "23/11/2004",
      rating: "12+",
      cover: "https://media.ign.com/games/image/object/016/016985/world-of-warcraft-1_PCMAC.jpg",
      price: "39.99"
    },
    {
      id: this.generateRandomId(),
      title: "The Witcher 3 : Wild Hunt",
      genre: "RPG",
      developer: "CD Projekt RED",
      publisher: "Bandai Namco (Europe) / WB Games (US)",
      releaseDate: "19/05/2015",
      rating: "18+",
      cover: "https://media.ign.com/games/image/object/016/016985/world-of-warcraft-1_PCMAC.jpg",
      price: "49.99"
    }
  ]

  constructor() {
    let videogameList = this.getVideogameList();
  }

  //// VIDEOGAMELIST METHODS ////

  public setLocalStorageVideogameList(videogameList: Videogame[]): void {
    localStorage.setItem('videogameList', JSON.stringify({ videogameList }));
  }

  public getVideogameList(): Videogame[] {
    let localStorageItem = JSON.parse(localStorage.getItem('videogameList'));
    return localStorageItem == null ? this.dummyList : localStorageItem.videogameList;
  }

  public getVideogame(title: string): Videogame {
    let videogameList = this.getVideogameList();
    let videogame = new Videogame;
    for (let i = 0; i < videogameList.length; i++) {
      if (videogameList[i].title == title) {
        videogame = videogameList[i];
      }
    }
    return videogame;
  }

  public getNextGame(title : string): Videogame {
    let videogameList = this.getVideogameList();
    let videogame = new Videogame;
    for (let i = 0; i < videogameList.length; i++) {
      if (videogameList[i].title == title) {
        videogame = videogameList[i+1];
      }
    }
    return videogame;
  }

  public getVideogameById(id: string): Videogame {
    let videogameList = this.getVideogameList();
    let videogame = new Videogame;
    for (let i = 0; i < videogameList.length; i++) {
      if (videogameList[i].id == id) {
        videogame = videogameList[i];
      }
    }
    return videogame;
  }

  public addVideogame(videogame: Videogame): void {
    let videogameList = this.getVideogameList();
    videogame.id = this.generateRandomId();
    videogameList.push(videogame);
    this.setLocalStorageVideogameList(videogameList);
  }

  public removeVideogame(id: string): void {
    let videogameList = this.getVideogameList();
    videogameList = videogameList.filter((videogame) => videogame.id != id);
    this.setLocalStorageVideogameList(videogameList);
  }

  public updateVideogame(videogame: Videogame): void {
    let videogameList = this.getVideogameList();
    for (let i = 0; i < videogameList.length; i++) {
      if (videogameList[i].id == videogame.id) {
        videogameList[i] = videogame;
      }
    }
    this.setLocalStorageVideogameList(videogameList);
  }

  //// SHOPPINGCART METHODS ////

  public setLocalStorageMyCart(myCart: Videogame[]): void {
    localStorage.setItem('myCart', JSON.stringify({ myCart }));
  }

  public getMyCart(): Videogame[] {
    let localStorageItem = JSON.parse(localStorage.getItem('myCart'));
    return localStorageItem == null ? [] : localStorageItem.myCart;
  }
  
  public addToCart(videogame : Videogame) : void {
    let myCart = this.getMyCart();
    videogame.id = this.generateRandomId();
    myCart.push(videogame)
    this.setLocalStorageMyCart(myCart);
  }

  public removeFromCart(id : string) : void {
    let myCart = this.getMyCart();
    myCart = myCart.filter((videogame) => videogame.id != id);
    this.setLocalStorageMyCart(myCart);
  }

  public getTotalCost(myCart: Videogame[]) : number {
    let totalCost : number = 0;
    for (let i = 0; i < myCart.length; i ++) {
      totalCost += parseFloat(myCart[i].price);
    }
    return Math.round(totalCost * 100) / 100;
  }

  //// OTHER METHODS ////

  private generateRandomId() : string {
    return Math.random().toString(36).substr(2, 9);
  };

}
