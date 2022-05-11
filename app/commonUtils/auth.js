
import { BEARER_TOKEN } from "../constants"



export const getBearerToken = () => {
  return localStorage.getItem(BEARER_TOKEN);
};

export const setBearerToken = (token) => {
  return localStorage.setItem(BEARER_TOKEN, `Bearer ${token}`);
};

export const isAuthenticated = () => {
  const token = getBearerToken();
  if (token) {
    return true;
  }
  return false;
};