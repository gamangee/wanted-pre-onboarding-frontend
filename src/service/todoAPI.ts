import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./api";
import { TodoProps, UpdateTodoProps } from "../types/todoType";

const token = localStorage.getItem("JWT");

const axiosConfig: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getTodosApi = async (): Promise<AxiosResponse<TodoProps[]>> => {
  const config: AxiosRequestConfig = {
    ...axiosConfig,
    url: "/todos",
    method: "get",
  };

  const response = await api.request(config);
  return response;
};

export const createTodoApi = async (
  todo: string
): Promise<AxiosResponse<TodoProps>> => {
  const config: AxiosRequestConfig = {
    ...axiosConfig,
    url: "/todos",
    method: "post",
    data: {
      todo,
    },
  };

  const response = await api.request(config);
  return response;
};

export const updateTodoApi = async (
  id: number,
  updateTodo: UpdateTodoProps
): Promise<AxiosResponse<TodoProps>> => {
  const config: AxiosRequestConfig = {
    ...axiosConfig,
    url: `/todos/${id}`,
    method: "put",
    data: updateTodo,
  };

  const response = await api.request(config);
  return response;
};

export const deleteTodoApi = async (id: number): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    ...axiosConfig,
    url: `/todos/${id}`,
    method: "delete",
  };

  const response = await api.request(config);
  return response;
};
