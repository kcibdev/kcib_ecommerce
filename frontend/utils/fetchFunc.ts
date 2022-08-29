import { User } from "../types/userTypes";

interface Data {
  success: boolean;
  message: string;
  data: User | any | undefined | null;
}

export const fetchFunc = async (
  url: string,
  bodyObject: any,
  fetchMethod: string
): Promise<Data> => {
  return await fetch(url, {
    method: fetchMethod,
    headers: {
      "Content-Type": "application/json",
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
