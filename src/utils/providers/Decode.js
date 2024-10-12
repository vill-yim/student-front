import { decode } from "jsonwebtoken";

export const Decode = (state) => {
  try {
    const token = decode(state);
    return token;
  } catch (error) {
    console.log("error: ", error);
  }
};
