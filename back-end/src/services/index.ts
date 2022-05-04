import axios from "axios";
import { API_URL } from "../constantes/";

export const getCepByApi = async (tracking: string) => {
  try {
    const response = await axios.get(`${API_URL}/cep.json?code=${tracking}`);
    return response.data;
  } catch (error) {
    return false;
  }
};
