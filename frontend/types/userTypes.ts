import { Cart } from "./cartTypes";
import { Wishlist } from "./wishlistTypes";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cart: Cart[];
  wishlist: Wishlist[];
  token: string;
}
