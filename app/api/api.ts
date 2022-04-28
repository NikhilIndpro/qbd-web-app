import axios from "axios";
import { getBearerToken } from "../commonUtils/auth";
import { AUTH_HEADER_NAME, API_BASE_URL } from "../constants";

const createAPI = () => {
  const apiHeader = {
    "Content-Type": "application/json",
  };

  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: apiHeader,
  });

  api.interceptors.request.use(async (config:any) => {
    const bearerToken = await getBearerToken();
    if (bearerToken) {
      config.headers[`${AUTH_HEADER_NAME}`] = bearerToken;
    }
    return config;
  });

  return api;
};

export default createAPI();
