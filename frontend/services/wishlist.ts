import { toast } from "react-toastify";
import { Cart } from "../types/cartTypes";
import { Product } from "../types/productTypes";
import { User } from "../types/userTypes";
import { Wishlist } from "../types/wishlistTypes";
import { NODE_WISHLIST_URL } from "../utils/constants";
import { fetchFunc } from "../utils/fetchFunc";

export const saveWishlist = async (
  product: Product,
  token: string
): Promise<User | undefined> => {
  const wishlistData = {
    productId: product._id,
    title: product.title,
    price: Number(product.price),
    image: product.image[0] as string,
  };
  const result = await fetchFunc(
    `${NODE_WISHLIST_URL}`,
    wishlistData,
    "POST",
    token
  );
  console.log("result", result);
  if (!result.success) {
    toast.error(result.message);
    return;
  }
  if (result.data) {
    const user = {
      ...result.data,
      cart: result.data.cart as Cart[],
      wishlist: result.data.wishlist as Wishlist[],
    };
    toast.success(result.message);
    return user as User;
  }
  toast.success(result.message);
};

export const deleteWishlist = async (
  product: Product,
  token: string
): Promise<User | undefined> => {
  const wishlistData = {};
  const result = await fetchFunc(
    `${NODE_WISHLIST_URL}/${product._id}`,
    wishlistData,
    "DELETE",
    token
  );
  console.log("result", result);
  if (!result.success) {
    toast.error(result.message);
    return;
  }
  if (result.data) {
    const user = {
      ...result.data,
      cart: result.data.cart as Cart[],
      wishlist: result.data.wishlist as Wishlist[],
    };
    toast.success(result.message);
    return user as User;
  }
  toast.success(result.message);
};
