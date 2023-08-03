import apiClient from "~utils/apiClient";
import { IValidatePhoneForm } from "../types";

export const validatePhone = async (
  validatePhoneDto: IValidatePhoneForm,
): Promise<boolean> => {
  const isPhoneValid = await apiClient.post<boolean, IValidatePhoneForm>(
    "authentication/validate-phone",
    {
      data: validatePhoneDto,
    },
  );
  return isPhoneValid;
};

export default {
  validatePhone,
};
