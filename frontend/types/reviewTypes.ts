export interface Review {
  id: string;
  productId: string;
  customerId: string;
  customerName: string;
  rating: number;
  comment: string;
  verifiedBuyer: boolean;
  createdAt: string;
}
