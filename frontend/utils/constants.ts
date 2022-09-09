export const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!;
export const NODE_BASE_URL: string = process.env.NEXT_PUBLIC_NODE_BASE_URL!;

export const NODE_LOGIN_URL: string =
  `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_LOGIN_URL}`!;
export const NODE_REGISTER_URL: string =
  `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_REGISTER_URL}`!;
export const NODE_RESET_URL: string =
  `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_RESET_URL}`!;
export const NODE_FORGOT_URL: string =
  `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_FORGOT_URL}`!;
export const NODE_LOGOUT_URL: string =
  `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_LOGOUT_URL}`!;
export const NODE_ACCESS_URL: string =
  `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_ACCESS_URL}`!;

export const NODE_PRODUCT_URL: string =
  `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_PRODUCT_URL}`!;

export const NODE_WISHLIST_URL: string = `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_WISHLIST_URL}`;
export const NODE_CUSTOMER_URL: string = `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_CUSTOMER_URL}`;

export const NODE_IMAGE_URL: string =
  `${NODE_BASE_URL}${process.env.NEXT_PUBLIC_NODE_IMAGE_URL}`!;
export const NEXT_IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL!;

export const NEXT_PUBLIC_URL: string = process.env.NEXT_PUBLIC_URL!;
export const NEXT_PRODUCT_URL: string = `${BASE_URL}/api/v1/product/`;
export const NEXT_WISHLIST_URL: string = `${BASE_URL}/api/v1/wishlist/`;
