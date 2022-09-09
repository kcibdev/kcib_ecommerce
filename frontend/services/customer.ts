import { toast } from "react-toastify";
import { Cart } from "../types/cartTypes";
import { User } from "../types/userTypes";
import { Wishlist } from "../types/wishlistTypes";
import { NODE_CUSTOMER_URL } from "../utils/constants";
import { fetchFunc } from "../utils/fetchFunc";

export const getCustomer = async (
  id: string,
  token: string
): Promise<User | undefined> => {
  let user: User;
  const result = await fetchFunc(
    `${NODE_CUSTOMER_URL}/${id}`,
    {},
    "GET",
    token
  );
  if (result.success && result.data) {
    const userData = result.data;
    user = {
      ...userData,
      cart: userData.cart as Cart[],
      wishlist: userData.wishlist as Wishlist[],
    };
    return user;
  }
};
