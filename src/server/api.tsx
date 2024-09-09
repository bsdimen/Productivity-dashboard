import { User } from "../TYPES/USER";
import axios from "axios";

const URL_API = "https://66d8c2ae37b1cadd8055a255.mockapi.io/Workiie";
interface userFetch {
  email: string;
  password: string;
}

interface userAdd {
  email: string;
  fullname: string;
  password: string;
}

export const FETCH_USER = async ({
  email,
  password,
}: userFetch): Promise<User> => {
  try {
    const response = await axios.post(
      `${URL_API}/users`,
      { email, password }
    );
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("No response");
    }
  } catch {
    throw new Error("ERROR");
  }
};

export const ADD_USER = async ({ email, fullname, password }: userAdd) => {
  try {
    const response = await axios.post(
      `${URL_API}/users`,
      { email, fullname, password }
    );
    if (response.status === 201) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("No response");
    }
  } catch {
    throw new Error("ERROR");
  }
};
