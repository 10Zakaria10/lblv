import apiClient from "~utils/apiClient";
import { PASSWORD_REGEX } from "~utils/constants";
import { IUpdatePasswordForm } from "../types";

export const isPasswordValid = (password: string): boolean =>
  PASSWORD_REGEX.test(password);
export const updatePassword = async (updatePasswordDto:IUpdatePasswordForm): Promise<void> => {
  await apiClient.patch<undefined, IUpdatePasswordForm>(
    "/authentication/update-password",
    {
      data: updatePasswordDto,
    },
  );
};

export default {
  isPasswordValid,updatePassword
}