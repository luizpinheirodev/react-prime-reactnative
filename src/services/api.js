import axios from "axios";
import { API_KEY } from "@env";

// Request Token
// https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}

export const key = API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
