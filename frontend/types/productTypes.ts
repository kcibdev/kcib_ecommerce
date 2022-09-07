export interface Product {
  _id: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  brand: string;
  image: File[] | string[];
  category: string;
  subCategory: string;
  quantity: string | number;
  sizes: string[];
  colors: string[];
  sellerId: string;
  url: string;
  rating: number;
  reviews: string[];
  totalOrders: number;
  available: boolean;
  views: number;
}
