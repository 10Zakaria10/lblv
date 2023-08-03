import React, { FC } from "react";
import { StyledFormContainer } from "~components/form/style";
import LbLogo from "~components/lbLogo";
import { useDeviceSize } from "~utils/useDeviceSize";
import Form from "~components/otpPhone/form";
import { getPhoneNumber } from "../services/otpPhone/otp.service";
import passwordChangeOtpWording from "./wording";
import { useOtpInfoQuery } from "~containers/hooks/otpPhone";

interface IPasswordChangeOtp{
  redirectionUrl: string;

}
const PasswordChangeOtp: FC<IPasswordChangeOtp> = ({redirectionUrl}) => {
  const { up } = useDeviceSize();
  const [otp, setOtp] = React.useState<string>("");
  const phoneNumber = getPhoneNumber();
  const { otpInfos, loading } = useOtpInfoQuery(phoneNumber ?? "");

  if (loading || !otpInfos) return <div>Loading</div>;

  return (
    <StyledFormContainer>
      {up.mobile && <LbLogo imagePath="/images/Brand-logos.svg" />}
      <Form
        wording={passwordChangeOtpWording}
        otp={otp}
        setOtp={setOtp}
        otpInfos={otpInfos}
        phoneNumber={phoneNumber ?? ""}
        redirectionUrl={redirectionUrl}
      />
    </StyledFormContainer>
  );
};

export default PasswordChangeOtp;
