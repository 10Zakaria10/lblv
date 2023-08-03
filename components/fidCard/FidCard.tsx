import Image from "next/image";
import type { FC } from "react";
import {
  StyledBarCodeContainer,
  StyledCarrefourLogoContainer,
  StyledFidCardContainer,
  StyledFidCardLineOne,
  StyledFidCardLineTwo,
  StyledName,
  StyledPointsTotal,
} from "./FidCard.style";
import Barcode from "~components/barcode";

interface IFidCard {
  cardCode: string;
  pointsWording: string;
  totalPoints: number;
  name: string;
  onclick: () => void;
}

const FidCard: FC<IFidCard> = ({
  cardCode,
  pointsWording,
  totalPoints,
  name,
  onclick,
}) => {
  return (
    <StyledFidCardContainer onClick={onclick}>
      <StyledCarrefourLogoContainer>
        <Image src={"/images/banner-logo.svg"} width={285} height={203} />
      </StyledCarrefourLogoContainer>
      <StyledFidCardLineOne>
        <Image src={"/images/fid-card-line-1.svg"} width={200} height={200} />
      </StyledFidCardLineOne>
      <StyledFidCardLineTwo>
        <Image src={"/images/fid-card-line-2.svg"} width={200} height={200} />
      </StyledFidCardLineTwo>
      <StyledPointsTotal>
        <span>{totalPoints}</span> {pointsWording}
      </StyledPointsTotal>
      <StyledName>{name}</StyledName>
      <StyledBarCodeContainer>
        <Barcode code={cardCode} />
      </StyledBarCodeContainer>
    </StyledFidCardContainer>
  );
};

export default FidCard;
