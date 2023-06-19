import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./api";
import { AuthData } from "../types/authType";

const authRequest = async (
  url: string,
  method: string,
  data: AuthData
): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  const response = await api.request(config);
  return response;
};

export const signUpApi = async (data: AuthData): Promise<AxiosResponse> => {
  return authRequest("/auth/signup", "post", data);
};

export const signInApi = async (data: AuthData): Promise<AxiosResponse> => {
  return authRequest("/auth/signin", "post", data);
};
