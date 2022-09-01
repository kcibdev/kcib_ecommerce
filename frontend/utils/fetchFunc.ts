import { User } from "../types/userTypes";

interface Data {
  success: boolean;
  message: string;
  data: User | any | undefined | null;
}

export const fetchFunc = async (
  url: string,
  bodyObject: any,
  fetchMethod: string,
  token = ""
): Promise<Data> => {
  console.log("fetchFunc", url, bodyObject, fetchMethod);
  return await fetch(url, {
    method: fetchMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(bodyObject),
  })
    .then(async (res) => {
      const result = await res.json();
      return result;
    })
    .catch((error) => {
      return error;
    });
};
