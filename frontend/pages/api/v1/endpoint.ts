import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await axios
    .post(req.body.url, req.body)
    .then((response) => {
      console.log("response.data", response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log("error.response?.data", error.response?.data);
      res.status(error.response?.status).json(error.response?.data);
    });
}
