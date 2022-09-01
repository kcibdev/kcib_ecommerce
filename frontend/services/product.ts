import { Product } from "../types/productTypes";

export const createProduct = (product: Product): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product);
    }, 1000);
  });
};
