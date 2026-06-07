import axios from "axios";

export const api = axios.create({
  baseURL: "https://horizontederisco.onrender.com/api/events"
});