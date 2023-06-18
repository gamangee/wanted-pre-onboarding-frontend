import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./api";
import { AuthData } from "../types/authType";

export const signUpApi = async (data: AuthData): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    url: "/auth/signup",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  const response = await api.request(config);
  return response;
};

export const signInApi = async (data: AuthData): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    url: "/auth/signin",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  const response = await api.request(config);
  return response;
};
