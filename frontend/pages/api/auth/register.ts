import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NODE_REGISTER_URL } from "../../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await axios
    .post(NODE_REGISTER_URL, req.body)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(error.response?.status).json(error.response?.data);
    });
}
