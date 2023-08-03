import { AxiosError } from "axios";
import Router from "next/router";
import routes from "~components/Routes/routes";
import { refreshToken } from "~containers/signin/services/auth.service";
import { ApiError } from "~types/apiError";

export const REFRESH_TOKEN_ENDPOINT = "authentication/refresh-token";
export const SIGN_IN_ENDPOINT = "authentication/sign-in";

export const UNKNOWN_ERROR: ApiError = {
  httpStatusCode: 500,
  code: "unkonwn_error",
};

export const FORBIDEN_ERROR: ApiError = {
  httpStatusCode: 403,
  code: "forbiden_error",
};

export const isApiError = (error: any): error is ApiError => {
  return error && error.hasOwnProperty("code");
};

export const mapError = (error: AxiosError) => {
  const serverError = error.response?.data;
  if (isApiError(serverError)) {
    return {
      code: serverError.code,
      httpStatusCode: serverError.httpStatusCode,
    };
  }
  return UNKNOWN_ERROR;
};

export const checkAndGenerateToken = async () => {
  const res = await refreshToken();
  if (res.status !== 200) {
    Router.push(routes.SIGN_IN);
  }
};

export const redirectToHome = () => {
  Router.push(routes.HOME);
};

export const isNotLoginOrRefreshTokenUrl = (responseUrl: string): boolean => {
  return !(responseUrl.endsWith(REFRESH_TOKEN_ENDPOINT) || responseUrl.endsWith(SIGN_IN_ENDPOINT));
};
