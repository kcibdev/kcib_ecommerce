import axios from "axios";
import { NODE_IMAGE_URL } from "../utils/constants";

export const imageUpload = async (images: File[]) => {
  let imgArr: string[] = [];

  for (const item of images) {
    const formData = new FormData();
    formData.append("file", item);
    await axios
      .post(NODE_IMAGE_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (res) => {
        imgArr.push(res.data.data);
      })
      .catch((error) => {
        console.log("error.response?.data", error.response?.data);
      });
  }
  return imgArr;
};
