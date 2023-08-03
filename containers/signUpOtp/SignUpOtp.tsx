import Router from "next/router";
import React, { FC } from "react";
import { StyledFormContainer } from "~components/form/style";
import LbLogo from "~components/lbLogo";
import routes from "~components/Routes/routes";
import { useDeviceSize } from "~utils/useDeviceSize";
import Form from "~components/otpPhone/form";
import { useOtpInfoQuery } from "~containers/hooks/otpPhone";
import { getPhoneNumber } from "~containers/services/otpPhone/otp.service";
import signUpOtpWording from "./wording";

const SignUpOtp: FC = () => {
  const { up } = useDeviceSize();
  const [otp, setOtp] = React.useState<string>("");
  const phoneNumber = getPhoneNumber();
  const { otpInfos, loading, error } = useOtpInfoQuery(phoneNumber || "");

  if (error) {
    Router.push(routes.SIGN_UP);
  }

  if (loading || !otpInfos) return <div>Loading</div>;

  return (
    <StyledFormContainer>
      {up.mobile && <LbLogo imagePath="/images/Brand-logos.svg" />}
      <Form
        wording={signUpOtpWording}
        otp={otp}
        setOtp={setOtp}
        otpInfos={otpInfos}
        phoneNumber={phoneNumber ?? ""}
        redirectionUrl={routes.SIGN_IN}
      />
    </StyledFormContainer>
  );
};

export default SignUpOtp;
