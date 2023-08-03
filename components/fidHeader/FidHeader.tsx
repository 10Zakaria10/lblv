import {
  CreditCard,
  SearchOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { FC } from "react";
import Button from "~components/button";
import { ButtonType } from "~components/button/Button";
import LbLogo from "~components/lbLogo";
import { IHeaderWording } from "~containers/fidSpace/wording/types";
import {
  StyledHeaderContainer,
  StyledNavItem,
  StyledLogoContainer,
  StyledHeaderItemsContainer,
  StyledUtilsContainer,
  StyledButtonContainer,
} from "./FidHeader.style";
import NotificationsIcon from "./components/notificationsIcon";
import SettingsIcon from "./components/settingsIcon";
import routes from "~components/Routes/routes";
import Router from "next/router";

interface IFidHeader {
  wording: IHeaderWording;
}
const FidHeader: FC<IFidHeader> = ({ wording }) => {

  const handleBringoButtonClick = () => {
    window.open("https://www.bringo.ma/fr_MA/","_blank")
  }
  const handleClubCarrefourButtonClick = () => {
    Router.push(routes.MY_SPACE)
  }
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer>
        <LbLogo imagePath="/images/Logo.svg" />
      </StyledLogoContainer>
      <StyledHeaderItemsContainer>
        <nav>
          <StyledNavItem href={routes.HOME}>{wording.home}</StyledNavItem>
          <StyledNavItem target="_blank" href="https://www.carrefourmaroc.ma/mes-promotions/nos-catalogues/">{wording.promotion}</StyledNavItem>
          <StyledNavItem href="#">{wording.products}</StyledNavItem>
          <StyledNavItem target="_blank" href="https://www.carrefourmaroc.ma/mes-avantages/services-au-quotidien/solutions-de-paiement/">{wording.services}</StyledNavItem>
        </nav>
        <StyledUtilsContainer>
          <SearchOutlined />
          <SettingsIcon />
          <NotificationsIcon />
        </StyledUtilsContainer>
        <StyledButtonContainer>
          <Button
            buttonType={ButtonType.OUTLINED}
            startIcon={
              <Image src="/images/bringo-logo.svg" width={24} height={24} />
            }
            text={wording.bringo}
            onClick={handleBringoButtonClick}
          />
          <Button startIcon={<CreditCard />} text={wording.clubCarrefour} onClick={handleClubCarrefourButtonClick} />
        </StyledButtonContainer>
      </StyledHeaderItemsContainer>
    </StyledHeaderContainer>
  );
};

export default FidHeader;
