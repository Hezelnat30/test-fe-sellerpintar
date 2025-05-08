import environment from "@/config/environment";
import { getTokenCookie } from "@/utils";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const apiInstance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
});

apiInstance.interceptors.request.use(
  async (config) => {
    const token = getTokenCookie();
    // Set token to header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
