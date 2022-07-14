import axios from "axios";

export const api = axios.create({
  baseURL: "https://q-academico.vercel.app/",
});
