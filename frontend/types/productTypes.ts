export interface Product {
  id: string | null | undefined;
  title: string;
  description: string;
  price: string;
  discount: string;
  brand: string;
  image: File[];
  category: string;
  subCategory: string;
  quantity: string;
  sizes: string[];
  colors: string[];
}
