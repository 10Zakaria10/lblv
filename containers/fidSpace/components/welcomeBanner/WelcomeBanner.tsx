import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Popup from "~components/popup";
import routes from "~components/Routes/routes";
import { IWelcomeBannerWording } from "~containers/fidSpace/wording/types";
import { useDeviceSize } from "~utils/useDeviceSize";
import BannerCard from "../bannerCard";
import { MIN_REQUIRED_BALANCE } from "./constants";
import ProfileCompletion from "./ProfileCompletion";
import {
  StyledBannerCards,
  StyledBannerDetails,
  StyledBannerInfo,
  StyledBannerLogo,
  StyledBannerSolde,
  StyledBannerTitle,
  StyledCodeContainer,
  StyledCodePin,
  StyledCodePinDesc,
  StyledCodePinPopupTitle,
  StyledPinPopupContainer,
  StyledPinPopupHeaderContainer,
  StyledWelcomeBanner,
} from "./WelcomeBanner.style";

interface IWelcomeBanner {
  wording: IWelcomeBannerWording;
  name: string;
  points: number;
  isProfileCompleted: boolean;
  codePin: string;
}

const WelcomeBanner: FC<IWelcomeBanner> = ({
  wording,
  name,
  points,
  isProfileCompleted,
  codePin,
}) => {
  const isInsufficientBalance = points <= MIN_REQUIRED_BALANCE;

  const router = useRouter();

  const { down } = useDeviceSize();

  const [isPinPopupOpen, setPinPopupOpen] = useState(false);

  const handleShowPinCode = () => {
    setPinPopupOpen(true);
  };

  const handleGenerateCoupon = () => {
    router.push(routes.GENERATE_COUPON);
  };
  const handleDisplayCard = () => {
    router.push(routes.FID_CARD);
  };

  return (
    <StyledWelcomeBanner>
      <StyledBannerDetails>
        <StyledBannerLogo>
          <Image src="/images/banner-logo.svg" width={400} height={263} />
        </StyledBannerLogo>
        <div>
          <StyledBannerTitle>
            {wording.details.title} {name} !
          </StyledBannerTitle>
          <StyledBannerSolde>
            {wording.details.solde}
            <span>
              {points} {wording.details.points}
            </span>
            {isInsufficientBalance && (
              <StyledBannerInfo>{wording.details.info}</StyledBannerInfo>
            )}
          </StyledBannerSolde>
          {!down.mobile && (
            <ProfileCompletion
              isProfileCompleted={isProfileCompleted}
              description={wording.details.profileCompletion}
            />
          )}
        </div>
      </StyledBannerDetails>
      <Popup isOpen={isPinPopupOpen} setOpen={setPinPopupOpen}>
        <StyledPinPopupContainer>
          <StyledPinPopupHeaderContainer>
            <Image src={"/images/pin-check.svg"} width={32} height={31} />
            <StyledCodePinPopupTitle>
              {wording.codePinTitle}
            </StyledCodePinPopupTitle>
          </StyledPinPopupHeaderContainer>
          <StyledCodeContainer>
            <StyledCodePin>{codePin}</StyledCodePin>
            <StyledCodePinDesc>{wording.codePinDesc}</StyledCodePinDesc>
          </StyledCodeContainer>
        </StyledPinPopupContainer>
      </Popup>
      <StyledBannerCards>
        <BannerCard
          iconUrl={"/images/code-pin.svg"}
          buttonText={wording.codePin}
          isButtonDisabled={isInsufficientBalance}
          handleButtonClick={handleShowPinCode}
        />
        <BannerCard
          iconUrl={"/images/coupon.svg"}
          buttonText={wording.coupon}
          isButtonDisabled={isInsufficientBalance}
          handleButtonClick={handleGenerateCoupon}
        />
        <BannerCard
          iconUrl={"/images/card-fid.svg"}
          buttonText={wording.fidCard}
          handleButtonClick={handleDisplayCard}
        />
      </StyledBannerCards>
      {down.mobile && (
        <ProfileCompletion
          isProfileCompleted={isProfileCompleted}
          description={wording.details.profileCompletion}
        />
      )}
    </StyledWelcomeBanner>
  );
};

export default WelcomeBanner;
