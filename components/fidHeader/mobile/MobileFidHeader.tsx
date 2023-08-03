import { CreditCard, MenuOutlined, SearchOutlined} from "@mui/icons-material";
import { FC, useState } from "react";
import Button from "~components/button";
import LbLogo from "~components/lbLogo";
import MobileNavigator from "~components/mobileNavigator";
import { IHeaderWording } from "~containers/fidSpace/wording/types";
import { useDeviceSize } from "~utils/useDeviceSize";
import NotificationsIcon from "../components/notificationsIcon";
import SettingsIcon from "../components/settingsIcon";
import {
  StyledMobileHeaderContainer,
  StyledMobileLogoContainer,
  StyledMobileNavContainer,
  StyledMobileUtilsContainer,
} from "./MobileFidHeader.style";

interface IFidHeader {
  wording: IHeaderWording;
}

const MobileFidHeader: FC<IFidHeader> = ({ wording }) => {
  const { up } = useDeviceSize();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleClose = () => {
    setDrawerOpen(false);
  };
  const handleOpen = () => {
    setDrawerOpen(true);
  };

  return (
    <StyledMobileHeaderContainer>
      <StyledMobileNavContainer>
        <MenuOutlined onClick={handleOpen} />
        <SearchOutlined />
      </StyledMobileNavContainer>

      <StyledMobileLogoContainer>
        <LbLogo imagePath="/images/Logo.svg" />
      </StyledMobileLogoContainer>

      <StyledMobileUtilsContainer>
        {up.mobile && (
          <>
            <SettingsIcon />
            <NotificationsIcon />
          </>
        )}
        <Button startIcon={<CreditCard />} />
      </StyledMobileUtilsContainer>

      <MobileNavigator wording={wording} open={isDrawerOpen} handleClose={handleClose} />
    </StyledMobileHeaderContainer>
  );
};

export default MobileFidHeader;
