import axios, { AxiosRequestConfig } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { authorizationHeader } from "../../../utils/authorization";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers?.authorization!,
    },
  };
  await axios
    .post(
      req.body.url,
      req.body,
      authorizationHeader(req.headers?.authorization!)
    )
    .then((response) => {
      console.log("response.data", response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log("error.response?.data", error.response?.data);
      res.status(error.response?.status).json(error.response?.data);
    });
}
