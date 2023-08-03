import { useRouter } from "next/router";
import type { FC } from "react";
import { IProductListWording } from "~containers/fidSpace/wording/types";
import {
  StyledBonusContainer,
  StyledPointsTypographyBold,
  StyledPointsTypographySmall,
  StyledProductContainer,
  StyledProductContent,
  StyledProductImageContainer,
  StyledProductInformation,
  StyledProductPrice,
  StyledProductSupInfo,
  StyledProductTitle,
} from "./ProductCard.style";

interface IProductCard {
  id: string;
  points: number;
  imagePath: string;
  label: string;
  description: string;
  price: number;
  wording: IProductListWording;
}

const ProductCard: FC<IProductCard> = ({
  id,
  label,
  description,
  imagePath,
  points,
  price,
  wording,
}) => {
  const router = useRouter();
  const handleClickOnProduct = () => {
    router.push(`/product-boost/${id}`);
  };
  return (
    <StyledProductContainer onClick={handleClickOnProduct}>
      <StyledProductContent>
        <StyledBonusContainer>
          <StyledPointsTypographyBold>+{points}</StyledPointsTypographyBold>
          <StyledPointsTypographySmall>
            {wording.points}
          </StyledPointsTypographySmall>
        </StyledBonusContainer>
        <StyledProductImageContainer>
          <img src={imagePath} />
        </StyledProductImageContainer>
        <StyledProductInformation>
          <StyledProductTitle>{label}</StyledProductTitle>
          <StyledProductSupInfo>{description}</StyledProductSupInfo>
        </StyledProductInformation>
        <StyledProductPrice>
          {price} {wording.currency}
        </StyledProductPrice>
      </StyledProductContent>
    </StyledProductContainer>
  );
};

export default ProductCard;
