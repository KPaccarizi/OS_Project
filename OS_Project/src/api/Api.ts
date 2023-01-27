import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function apiRequest<D = {}, R = unknown>({
  url,
  method,
  data,
  headers,
  params,
  responseType,
}: AxiosRequestConfig<D>) {
  return await Axios.request<D, AxiosResponse<R>>({
    url: `${import.meta.env.VITE_API_URL}/${url}`,
    method,
    data,
    headers,
    params,
    responseType,
  });
}
