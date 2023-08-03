import React from "react";

import LbLogo from "~components/lbLogo";
import { useDeviceSize } from "~utils/useDeviceSize";
import SignInForm from "./components/form/SignInForm";
import { StyledFormContainer } from "~components/form/style";

const SignInContainer: React.FC = () => {
  const { up } = useDeviceSize();

  return (
    <StyledFormContainer>
      {up.mobile && <LbLogo imagePath="/images/Brand-logos.svg" />}
      <SignInForm />
    </StyledFormContainer>
  );
};
export default SignInContainer;
