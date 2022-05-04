import axios from "axios";
import { API_URL } from "../constants/";
import { ICep } from "../interfaces";

export const getProductByIdApi = async (input: number): Promise<ICep> => {
  try {
    const response = await axios.get(`${API_URL}${input}`);
    return response.data;
  } catch (error) {
    return false;
  }
};
