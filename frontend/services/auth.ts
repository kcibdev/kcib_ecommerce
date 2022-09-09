import React from "react";
import { toast } from "react-toastify";
import { fetchFunc } from "../utils/fetchFunc";
import { User } from "../types/userTypes";
import { NEXT_PUBLIC_URL, NODE_FORGOT_URL } from "../utils/constants";
import { Wishlist } from "../types/wishlistTypes";
import { Cart } from "../types/cartTypes";

export const loginUser = async (
  formData: {
    email: string;
    password: string;
    url: string;
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setUserAccount: (user: User) => Promise<void>
) => {
  const result = await fetchFunc(NEXT_PUBLIC_URL, formData, "POST");
  if (!result.success) {
    toast.error(result.message);
  } else {
    toast.success(result.message);
    const userData = result.data;
    console.log(userData);
    const user: User = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      cart: userData.cart,
      wishlist: userData.wishlist,
      token: userData.token,
    };
    setUserAccount(user);
  }
  setIsLoading(false);
};

export const accessLoginUser = async (
  formData: {
    email: string;
    password: string;
    url: string;
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setAdminAccount: (user: User) => Promise<void>
) => {
  const result = await fetchFunc(formData.url, formData, "POST");
  if (!result.success) {
    toast.error(result.message);
  } else {
    toast.success(result.message);
    const userData = result.data;
    console.log("userData", userData);
    const user: User = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      cart: userData.cart as Cart[],
      wishlist: userData.wishlist as Wishlist[],
      token: userData.token,
    };
    setAdminAccount(user);
  }
  setIsLoading(false);
};

export const registerUser = async (
  formData: {
    name: string;
    email: string;
    phone: string;
    password: string;
    url: string;
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setUserAccount: (user: User) => Promise<void>
) => {
  const result = await fetchFunc(formData.url, formData, "POST");

  if (!result.success) {
    toast.error(result.message);
  } else {
    toast.success(result.message);
    const userData = result.data;
    const user: User = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      cart: userData.cart,
      wishlist: userData.wishlist,
      token: userData.token,
    };
    setUserAccount(user);
  }
  setIsLoading(false);
};

export const forgotPassword = async (
  email: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const result = await fetchFunc(
    NODE_FORGOT_URL,
    { email, url: NODE_FORGOT_URL },
    "POST"
  );
  if (!result.success) {
    toast.error(result.message);
  } else {
    toast.success(result.message);
  }
  setIsLoading(false);
};

export const resetPassword = async (
  formData: {
    password: string;
    email: string;
    token: string;
    url: string;
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const result = await fetchFunc(formData.url, formData, "POST");
  if (!result.success) {
    toast.error(result.message);
  } else {
    toast.success(result.message);
  }
  setIsLoading(false);
};
