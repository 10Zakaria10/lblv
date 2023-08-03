import React from "react";

import LbLogo from "~components/lbLogo";
import { useDeviceSize } from "~utils/useDeviceSize";
import ForgottenPasswordForm from "./components/form/ForgottenPasswordForm";
import { StyledFormContainer } from "~components/form/style";

const ForgottenPasswordSetPasswordContainer: React.FC = () => {
  const { up } = useDeviceSize();

  return (
    <StyledFormContainer>
      {up.mobile && <LbLogo imagePath="/images/Brand-logos.svg" />}
      <ForgottenPasswordForm />
    </StyledFormContainer>
  );
};
export default ForgottenPasswordSetPasswordContainer;
