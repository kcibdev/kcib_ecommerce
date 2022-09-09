import axios, { AxiosRequestConfig } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NODE_WISHLIST_URL } from "../../../../utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  await axios
    .get(`${NODE_WISHLIST_URL}/${id}`, req.body)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log("error.response?.data", error.response?.data);
      res.status(error.response?.status).json(error.response?.data);
    });
}
