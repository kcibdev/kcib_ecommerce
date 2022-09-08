import { AxiosRequestConfig } from "axios";

export const authorizationHeader = (token: string): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  return config;
};
