export type Videogame = {
  id: string;
  title: string;
  cover: string;
  developer: string;
  publisher: string;
  genre: string;
  releaseDate: string;
  rating: string;
  price: number;
};

/* export interface VideogameForm {
  title: string,
  cover: string,
  developer: string,
  publisher: string,
  genre: string,
  releaseDate: string,
  rating: string,
  price: number,
} */


export function createVideogame(videogame: Partial<Videogame>) {
  return {
    id: videogame.id,
    title: videogame.title,
    cover: videogame.cover,
    developer: videogame.developer,
    publisher: videogame.publisher,
    genre: videogame.genre,
    releaseDate: videogame.releaseDate,
    rating: videogame.rating,
    price: videogame.price,
  } as Videogame;
}

/* export function createVideogameForm(videogameForm: Partial<VideogameForm>) {
  return {
    title: videogameForm.title || '',
    cover: videogameForm.cover || '',
    developer: videogameForm.developer || '',
    publisher: videogameForm.publisher || '',
    genre: videogameForm.genre || '',
    releaseDate: videogameForm.releaseDate || '',
    rating: videogameForm.rating || '',
    price: videogameForm.price || '',
  } as VideogameForm;
} */
