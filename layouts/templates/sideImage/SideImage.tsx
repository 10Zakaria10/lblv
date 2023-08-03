import React from "react";
import { BackToHome } from "~components/backToHome/BacktoHome";
import LbLogo from "~components/lbLogo";
import { useDeviceSize } from "~utils/useDeviceSize";

import BlankLayout from "../blank";

import {
  StyledLeftSide,
  StyledRightSide,
  StyledSideImageContainer,
  HeaderContainer,
  HelpIcon,
} from "./SideImage.style";

const SideImageLayout: React.FC = ({ children }) => {
  const { down } = useDeviceSize();

  return (
    <BlankLayout>
      <StyledSideImageContainer>
        <StyledLeftSide />
        <StyledRightSide>
          <HeaderContainer>
            <BackToHome />
            {down.mobile && <LbLogo />}
            {down.mobile && <HelpIcon />}
          </HeaderContainer>
          {children}
        </StyledRightSide>
      </StyledSideImageContainer>
    </BlankLayout>
  );
};

export default SideImageLayout;
