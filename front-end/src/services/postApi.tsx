import axios from "axios";
import { API_URL } from "../../constants/";

export const getProductByIdApi = async (input: number): Promise<> => {
  try {
    const response = await axios.get(`${API_URL}${input}`);
    return response.data;
  } catch (error) {
    return false;
  }
};
