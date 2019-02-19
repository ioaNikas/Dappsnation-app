import { Injectable } from '@angular/core';
import { Videogame } from '../classes/videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  public dummyList: Videogame[] = [
    {
      id: "1",
      title: "20XX",
      genre: "Action",
      developer: "Fire Hose Games",
      publisher: "Batterystaple Games",
      releaseDate: "16/08/2016",
      rating: "E",
      cover: "https://www.mobygames.com/images/covers/l/493281-20xx-xbox-one-front-cover.jpg",
      price: 19.99
    },
    {
      id: "2",
      title: "Rocket League",
      genre: "Sport",
      developer: "Psyonix Inc",
      publisher: "Psyonix Inc",
      releaseDate: "07/07/2015",
      rating: "E",
      cover: "https://www.mobygames.com/images/covers/l/441545-rocket-league-xbox-one-front-cover.jpg",
      price: 19.99
    },
    {
      id: "3",
      title: "Starbound",
      genre: "Adventure",
      developer: "Chucklefish",
      publisher: "Chucklefish",
      releaseDate: "22/07/2016",
      rating: "T",
      cover: "https://gpstatic.com/acache/37/31/1/fr/packshot-d8b1c95b799532bb9da622a92cafd17d.jpg",
      price: 13.99
    },
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

  public getVideogame(id: string): Videogame {
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
    let id: number = videogameList.length + 1;
    videogame.id = id.toString();
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
      totalCost += myCart[i].price;
    }
    return totalCost;
  }

}
