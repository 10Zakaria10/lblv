import axios from "axios";
import {
  checkAndGenerateToken,
  FORBIDEN_ERROR,
  isNotLoginOrRefreshTokenUrl,
  mapError,
  redirectToHome,
  UNKNOWN_ERROR,
} from "./apiHelper";

type ClientRequestConfig = {
  params?: any;
  paramsSerializer?: (params: any) => string;
};

type ClientRequestPayloadConfig<D> = ClientRequestConfig & {
  data?: D;
};

const API_BASE_URL = "/api/";
const instance = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          const responseUrl = error.request.responseURL as string;
          if (isNotLoginOrRefreshTokenUrl(responseUrl)) {
            await checkAndGenerateToken();
            return instance(originalConfig);
          }
        }
        if (error.response.status === 403) {
          redirectToHome();
          throw FORBIDEN_ERROR;
        }
      }
      throw mapError(error);
    }
    throw UNKNOWN_ERROR;
  },
);

async function _get<TData>(path: string, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.get<TData>(path, config);
  return data;
}

async function _post<TData, TBody>(path: string, config?: ClientRequestPayloadConfig<TBody>): Promise<TData> {
  const { data } = await instance.post<TData>(path, config?.data);
  return data;
}

async function _delete<TData>(path: string, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.delete<TData>(path, config);
  return data;
}

async function _put<TData, TBody>(path: string, config?: ClientRequestPayloadConfig<TBody>): Promise<TData> {
  const { data } = await instance.put<TData>(path, config?.data);
  return data;
}

async function _patch<TData, TBody>(path: string, config?: ClientRequestPayloadConfig<TBody>): Promise<TData> {
  const { data } = await instance.patch<TData>(path, config?.data);
  return data;
}

export default {
  get: _get,
  post: _post,
  delete: _delete,
  put: _put,
  patch: _patch,
};
