import axios from "axios";

export const authApi = axios.create({
    baseURL: "https://localhost:7117/",
  });
  