// tslint:disable-next-line
export type CartItem = {
  id: string;
  videogameId: string;
  customerId: string;
  title: string;
  genre: string;
  releaseDate: string;
  price: number;
};

export function createCartItem(cartItem: Partial<CartItem>) {
  return {
    id: cartItem.id,
    videogameId: cartItem.videogameId,
    customerId: cartItem.customerId,
    title: cartItem.title,
    genre: cartItem.genre,
    releaseDate: cartItem.releaseDate,
    price: cartItem.price,
  } as CartItem;
}
