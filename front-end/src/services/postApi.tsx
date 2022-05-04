import axios from "axios";

export const api = axios.create({
  baseURL: "https://ws.apicep.com/cep.json?code=",
});
