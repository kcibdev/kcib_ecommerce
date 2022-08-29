import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NODE_LOGIN_URL } from "../../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  await axios
    .post(NODE_LOGIN_URL, { email, password })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(error.response?.status).json(error.response?.data);
    });
}
