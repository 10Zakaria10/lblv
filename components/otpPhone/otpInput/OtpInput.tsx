import { containerStyle, ErrorOtp, ErrorOtpWrapper, inputStyle } from "./style";
import OtpInput from "react-otp-input";

interface IOtpInput {
  otp: string;
  isOTPCodeValid: boolean;
  attemptsCount: number;
  handleOnChange: (value: string) => void;
  showErrorMessage: boolean;
}
const InputOtp: React.FC<IOtpInput> = ({ otp, handleOnChange, isOTPCodeValid, attemptsCount, showErrorMessage }) => {
  return (
    <>
      <OtpInput
        value={otp}
        onChange={handleOnChange}
        numInputs={4}
        containerStyle={containerStyle}
        inputStyle={inputStyle(isOTPCodeValid)}
        isInputNum={true}
      />
      {showErrorMessage && otp.length > 0 && (
        <ErrorOtpWrapper>
          <ErrorOtp>
            Le code n’est pas valide. Il vous reste {attemptsCount} essais.
          </ErrorOtp>
        </ErrorOtpWrapper>
      )}
    </>
  );
};
export default InputOtp;
