import React from "react";

import { useDeviceSize } from "~utils/useDeviceSize";
import SignUpForm from "./components/signUpForm";
import LbLogo from "~components/lbLogo";
import { StyledFormContainer } from "~components/form/style";
import signUpWording from "./wording";

const SignUpContainer: React.FC = () => {
  const { up } = useDeviceSize();
  return (
    <StyledFormContainer>
      {up.mobile && <LbLogo imagePath="/images/Brand-logos.svg" />}
      <SignUpForm wording={signUpWording} />
    </StyledFormContainer>
  );
};
export default SignUpContainer;
