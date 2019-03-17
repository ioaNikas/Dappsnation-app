// tslint:disable-next-line
export type CartItem = {
  id: string;
  videogameId: string;
  title: string;
  cover: string;
  developer: string;
  publisher: string;
  genre: string;
  releaseDate: string;
  rating: string;
  price: number;
};

export function createCartItem(cartItem: Partial<CartItem>) {
  return {
    id: cartItem.id,
    videogameId: cartItem.videogameId,
    title: cartItem.title,
    cover: cartItem.cover,
    developer: cartItem.developer,
    publisher: cartItem.publisher,
    genre: cartItem.genre,
    releaseDate: cartItem.releaseDate,
    rating: cartItem.rating,
    price: cartItem.price,
  } as CartItem;
}
