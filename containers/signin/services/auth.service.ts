import apiClient from "~utils/apiClient";
import { REFRESH_TOKEN_ENDPOINT } from "~utils/apiHelper";
import { ILoginForm } from "../types";

export const login = async (loginDto: ILoginForm): Promise<void> => {
  await apiClient.post<undefined, ILoginForm>("authentication/sign-in", { data: loginDto });
};

export const refreshToken = async (): Promise<any> => {
  return apiClient.post<any, any>(REFRESH_TOKEN_ENDPOINT, { data: null });
};

export default {
  login,
  refreshToken,
};
