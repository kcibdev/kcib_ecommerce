import { toast } from "react-toastify";
import { Product } from "../types/productTypes";
import { NEXT_PUBLIC_URL, NODE_CREATE_PRODUCT_URL } from "../utils/constants";
import { fetchFunc } from "../utils/fetchFunc";
import { imageUpload } from "./imageUpload";

export const createProduct = async (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  product: Product,
  token: string
) => {
  const image: string[] = await imageUpload(product.image as File[]);
  const formData = {
    title: product.title,
    price: product.price,
    discount: product.discount,
    brand: product.brand,
    description: product.description,
    image: image,
    quantity: product.quantity,
    sellerId: product.sellerId,
    category: product.category,
    subCategory: product.subCategory,
    sizes: product.sizes,
    colors: product.colors,
    url: NODE_CREATE_PRODUCT_URL,
  };
  const result = await fetchFunc(NEXT_PUBLIC_URL, formData, "POST", token);
  if (!result.success) {
    toast.error(result.message);
  } else {
    toast.success(result.message);
  }
  setIsLoading(false);
};
