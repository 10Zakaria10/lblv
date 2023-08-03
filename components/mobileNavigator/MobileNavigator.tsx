import { HighlightOff } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";
import Button from "~components/button";
import { ButtonType } from "~components/button/Button";
import { IHeaderWording } from "~containers/fidSpace/wording/types";
import { StyledCloseIconContainer, StyledMobileNav, StyledMobileNavigator, StyledMobileNavigatorContent, StyledMobileNavItem } from "./MobileNavigator.style";

interface IMobileNavigator {
  wording: IHeaderWording;
  open: boolean;
  handleClose: () => void
}

const MobileNavigator: FC<IMobileNavigator> = ({wording, open, handleClose}) => {
  const handleBringoButtonClick = () => {
    window.open("https://www.bringo.ma/fr_MA/","_blank")
  }
  return <Drawer
  anchor={"left"}
  open={open}
  onClose={handleClose}
>
  
<StyledMobileNavigator>
    <StyledCloseIconContainer>
    <HighlightOff onClick={handleClose} />
    </StyledCloseIconContainer>

    <StyledMobileNavigatorContent>

      <StyledMobileNav>
          <StyledMobileNavItem href="#">{wording.home}</StyledMobileNavItem>
          <StyledMobileNavItem href="#">{wording.promotion}</StyledMobileNavItem>
          <StyledMobileNavItem href="#">{wording.products}</StyledMobileNavItem>
          <StyledMobileNavItem target="_blank" href="https://www.carrefourmaroc.ma/mes-avantages/services-au-quotidien/solutions-de-paiement/">{wording.services}</StyledMobileNavItem>
      </StyledMobileNav>

      <Button
            buttonType={ButtonType.OUTLINED}
            startIcon={<Image src="/images/bringo-logo.svg" width={24} height={24} />}
            text={wording.bringo}
            onClick={handleBringoButtonClick}
          />

    </StyledMobileNavigatorContent>
  </StyledMobileNavigator>
</Drawer>;
};

export default MobileNavigator;
