import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 60000,
});

const { get, post, put, delete: remove } = api;
export { get, post, put, remove };