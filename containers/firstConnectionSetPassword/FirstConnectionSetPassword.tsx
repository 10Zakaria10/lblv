import React from "react";

import LbLogo from "~components/lbLogo";
import { useDeviceSize } from "~utils/useDeviceSize";
import FirstConnectionForm from "./components/form/FirstConnectionForm";
import { StyledFormContainer } from "~components/form/style";

const FirstConnectionSetPasswordContainer: React.FC = () => {
  const { up } = useDeviceSize();

  return (
    <StyledFormContainer>
      {up.mobile && <LbLogo imagePath="/images/Brand-logos.svg" />}
      <FirstConnectionForm />
    </StyledFormContainer>
  );
};
export default FirstConnectionSetPasswordContainer;
