import axios from "axios";

export const url = axios.create({ baseURL: "http://localhost:3000/api" });
