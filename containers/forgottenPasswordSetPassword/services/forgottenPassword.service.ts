import apiClient from "~utils/apiClient";

import { ISetPasswordForm } from "../types";
import { PASSWORD_REGEX } from "~utils/constants";

export const setPassword = async (password: string): Promise<void> => {
  const setPasswordDto: ISetPasswordForm = {
    password,
  };
  await apiClient.post<undefined, ISetPasswordForm>(
    "/authentication/reset-password",
    {
      data: setPasswordDto,
    },
  );
};

export const isPasswordValid = (password: string): boolean =>
  PASSWORD_REGEX.test(password);

export default {
  setPassword,
  isPasswordValid,
};
