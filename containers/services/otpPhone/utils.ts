export const isOTPValid = (otp: string): boolean => {
  return !!otp && otp.length === 4;
};
