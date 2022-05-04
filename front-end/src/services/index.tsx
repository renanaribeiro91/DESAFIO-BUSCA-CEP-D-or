import axios from "axios";
import { API_URL } from "../constantes/";
import { ICep } from "../interfaces";

export const getCepByApi = async (input: string) => {
  try {
    const response = await axios.get(`${API_URL}/?tracking=${input}`);
    return response.data;
  } catch (error) {
    return false;
  }
};
