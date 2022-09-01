import React from "react";
import { toast } from "react-toastify";
import { fetchFunc } from "../utils/fetchFunc";
import { User } from "../types/userTypes";
import {
  NEXT_FORGOT_URL,
  NEXT_LOGIN_URL,
  NEXT_REGISTER_URL,
  NEXT_RESET_URL,
  NEXT_ACCESS_URL,
} from "../utils/constants";

export const loginUser = async (
  formData: {
    email: string;
    password: string;
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setUserAccount: (user: User) => Promise<void>
) => {
  const result = await fetchFunc(NEXT_LOGIN_URL!, formData, "POST");
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
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setAdminAccount: (user: User) => Promise<void>
) => {
  const result = await fetchFunc(NEXT_ACCESS_URL!, formData, "POST");
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
      cart: userData.cart,
      wishlist: userData.wishlist,
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
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setUserAccount: (user: User) => Promise<void>
) => {
  const result = await fetchFunc(NEXT_REGISTER_URL!, formData, "POST");

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
  const result = await fetchFunc(NEXT_FORGOT_URL!, { email }, "POST");
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
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const result = await fetchFunc(NEXT_RESET_URL!, formData, "POST");
  if (!result.success) {
    toast.error(result.message);
  } else {
    toast.success(result.message);
  }
  setIsLoading(false);
};
