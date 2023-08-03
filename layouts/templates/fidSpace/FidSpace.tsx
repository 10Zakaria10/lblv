import React from "react";
import FidFooter from "~components/fidFooter";
import { footerWording } from "~components/fidFooter/wording";
import FidHeader from "~components/fidHeader";
import MobileFidHeader from "~components/fidHeader/mobile/MobileFidHeader";
import { headerWording } from "~containers/fidSpace/wording";
import { useDeviceSize } from "~utils/useDeviceSize";

import BlankLayout from "../blank";
import { FidSpaceLayoutContainer } from "./FidSpace.style";

const FidSpaceLayout: React.FC = ({ children }) => {
  const { down } = useDeviceSize();
  return (
    <BlankLayout>
      {down.laptop ? (
        <MobileFidHeader wording={headerWording} />
      ) : (
        <FidHeader wording={headerWording} />
      )}
      <FidSpaceLayoutContainer>{children}</FidSpaceLayoutContainer>
      <FidFooter wording={footerWording} />
    </BlankLayout>
  );
};

export default FidSpaceLayout;
