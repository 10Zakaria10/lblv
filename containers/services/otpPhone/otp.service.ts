import apiClient from "~utils/apiClient";
import { IOtpDto, ISignUpOtpQuery } from "~containers/services/otpPhone/types";

export const validateOtp = async (data: ISignUpOtpQuery): Promise<boolean> => {
  const isOtpValid = await apiClient.post<boolean, ISignUpOtpQuery>(
    "/otp/validate-otp",
    { data },
  );
  return isOtpValid;
};

export const resendOtp = async (phoneNumber: string): Promise<void> => {
  const otpDto: ISignUpOtpQuery = {
    phoneNumber,
  };
  return apiClient.patch<undefined, ISignUpOtpQuery>("/otp/resend-otp", {
    data: otpDto,
  });
};

export const getOtpInfo = async (phoneNumber: string): Promise<IOtpDto> => {
  const params = { phoneNumber };
  const otpInfos = await apiClient.get<IOtpDto>("/otp/otp-info", { params });
  otpInfos.generatedAt = new Date().toString();
  return otpInfos;
};

export const getPhoneNumber = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("phoneNumber");
  }
  return null;
};

export default {
  validateOtp,
  resendOtp,
  getOtpInfo,
  getPhoneNumber,
};
