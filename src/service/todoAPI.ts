import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./api";
import { TodoProps, UpdateTodoProps } from "../types/todoType";

export const getTodosApi = async (): Promise<AxiosResponse<TodoProps[]>> => {
  const token = localStorage.getItem("JWT");

  const config: AxiosRequestConfig = {
    url: "/todos",
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.request(config);
  return response;
};

export const createTodoApi = async (
  todo: string
): Promise<AxiosResponse<TodoProps>> => {
  const token = localStorage.getItem("JWT");

  const config: AxiosRequestConfig = {
    url: "/todos",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
  const token = localStorage.getItem("JWT");

  const config: AxiosRequestConfig = {
    url: `/todos/${id}`,
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: updateTodo,
  };

  const response = await api.request(config);
  return response;
};

export const deleteTodoApi = async (id: number): Promise<AxiosResponse> => {
  const token = localStorage.getItem("JWT");

  const config: AxiosRequestConfig = {
    url: `/todos/${id}`,
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.request(config);
  return response;
};
