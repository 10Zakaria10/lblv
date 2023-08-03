import ISignUpOtpWording from "~containers/signUpOtp/wording/types";
import {
  ResendLabel,
  ResendLabelWrapper,
  TimerLabel,
  TimerLabelWrapper,
  OrTyphography,
} from "../form/style";
import Timer from "../timer";
import { useCountDown, useResendOtpMutation } from "~containers/hooks/otpPhone";

interface IResendOtpProps {
  secondsLeft: number;
  generationLeft: number;
  phoneNumber: string;
  wording: ISignUpOtpWording;
  generatedAt: string;
}

const ResendOtp: React.FC<IResendOtpProps> = ({
  phoneNumber,
  secondsLeft,
  wording,
  generatedAt,
  generationLeft,
}) => {
  const { minutes, seconds } = useCountDown(secondsLeft, generatedAt);
  const { mutate: resendOtpMutation } = useResendOtpMutation();
  const canShowTimer = minutes + seconds > 0 && generationLeft > 0;
  const enabled = minutes + seconds === 0 && generationLeft > 0;

  const onResendOtp = () => {
    if (enabled) resendOtpMutation(phoneNumber);
  };
  return (
    <>
      <TimerLabelWrapper>
        {canShowTimer && (
          <TimerLabel>
            {wording.otpCodeTimer}
            <Timer minutes={minutes} seconds={seconds} /> {wording.timeUnit}
          </TimerLabel>
        )}
      </TimerLabelWrapper>
      <ResendLabelWrapper>
        <ResendLabel enabled={enabled} onClick={onResendOtp}>
          {wording.resendOtp}
        </ResendLabel>
        <OrTyphography>{wording.or}</OrTyphography>
        <ResendLabel enabled>{wording.clientService}</ResendLabel>
      </ResendLabelWrapper>
    </>
  );
};
export default ResendOtp;
