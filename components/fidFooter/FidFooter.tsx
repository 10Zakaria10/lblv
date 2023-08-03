import Image from "next/image";
import type { FC } from "react";
import Button from "~components/button";
import { ButtonType } from "~components/button/Button";
import { useDeviceSize } from "~utils/useDeviceSize";
import {
  StyledCopyrightContainer,
  StyledCopyrightContent,
  StyledDownloadInformation,
  StyledFidFooterNav,
  StyledFooterContainer,
  StyledFooterContent,
  StyledIconTextContainer,
  StyledPhoneImageContainer,
} from "./FidFooter.style";
import { IFooterWording } from "./wording/types";

interface IFidFooter {
  wording: IFooterWording;
}

const FidFooter: FC<IFidFooter> = ({ wording }) => {
  const {
    contactWording,
    copyrightWording,
    downloadAppWording,
    joinUsWording,
    menuWording,
  } = wording;

  const { down } = useDeviceSize();

  return (
    <div>
      <StyledDownloadInformation>
        <h6>{downloadAppWording.heading}</h6>
        <p>{downloadAppWording.infoText}</p>
        <p>
          <span>{downloadAppWording.scanBoldText}</span>
          {downloadAppWording.scanNormalText}
        </p>
      </StyledDownloadInformation>
      <StyledFooterContainer>
        <StyledFooterContent>
          <StyledFidFooterNav>
            <h5>{menuWording.heading}</h5>
            <a href="">{menuWording.products}</a>
            <a href="">{menuWording.promotion}</a>
            <a href="">{menuWording.services}</a>
            <a href="">{menuWording.stores}</a>
          </StyledFidFooterNav>
          <StyledFidFooterNav>
            <h5>{contactWording.heading}</h5>
            <a href="">
              <StyledIconTextContainer>
                <Image
                  src={"/images/footer-phone.svg"}
                  width={20}
                  height={20}
                />
                <span>{contactWording.phoneNumber}</span>
              </StyledIconTextContainer>
            </a>
            <a href="">
              <StyledIconTextContainer>
                <Image
                  src={"/images/footer-whatsapp.svg"}
                  width={20}
                  height={20}
                />
                <span>{contactWording.whatsapp}</span>
              </StyledIconTextContainer>
            </a>
            <a href="">
              <StyledIconTextContainer>
                <Image
                  src={"/images/footer-messanger.svg"}
                  width={20}
                  height={20}
                />
                <span>{contactWording.messanger}</span>
              </StyledIconTextContainer>
            </a>
            <a href="">{contactWording.contactUs}</a>
            <a href="">{contactWording.faq}</a>
            <Button
              buttonType={ButtonType.OUTLINED}
              text={contactWording.textButton}
              startIcon={
                <Image src={"/images/footer-chat.svg"} width={20} height={20} />
              }
            />
          </StyledFidFooterNav>
          <StyledFidFooterNav>
            <h5>{joinUsWording.heading}</h5>
            <a href="">{joinUsWording.facebook}</a>
            <a href="">{joinUsWording.instagram}</a>
            <a href="">{joinUsWording.youtube}</a>
            {down.laptop && (
              <div>
                <Image
                  src={"/images/footer-apple-store.svg"}
                  width={100}
                  height={30}
                />
                <Image
                  src={"/images/footer-play-store.svg"}
                  width={100}
                  height={30}
                />
              </div>
            )}
          </StyledFidFooterNav>
          <StyledPhoneImageContainer>
            <img src={"/images/footer-phone-image.svg"} />
            {!down.laptop && (
              <div>
                <Image
                  src={"/images/footer-apple-store.svg"}
                  width={100}
                  height={30}
                />
                <Image
                  src={"/images/footer-play-store.svg"}
                  width={100}
                  height={30}
                />
              </div>
            )}
          </StyledPhoneImageContainer>
        </StyledFooterContent>
        <StyledCopyrightContainer>
          <StyledCopyrightContent>
            {copyrightWording.politicText}
          </StyledCopyrightContent>
          <StyledCopyrightContent>|</StyledCopyrightContent>
          <StyledCopyrightContent>
            {copyrightWording.copyrightText}
          </StyledCopyrightContent>
          <StyledCopyrightContent>|</StyledCopyrightContent>
          <StyledCopyrightContent>
            {copyrightWording.cguText}
          </StyledCopyrightContent>
        </StyledCopyrightContainer>
      </StyledFooterContainer>
    </div>
  );
};

export default FidFooter;
