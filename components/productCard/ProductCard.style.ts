import styled from "styled-components";
import {
  colorPalette,
  down,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

export const StyledProductContainer = styled.article`
  width: calc(100% / 5 - ${getSpacing(8)});
  max-width: ${getSpacing(155)};
  padding: ${getSpacing(8, 10)};
  border: 1px solid ${colorPalette.concrete};
  border-radius: ${getSpacing(8)};
  &:not(:last-child) {
    margin-inline-end: ${getSpacing(8)};
  }
  ${down("laptop")} {
    width: calc(100% / 4 - ${getSpacing(8)});
  }
  ${down("tablet")} {
    width: calc(100% / 3 - ${getSpacing(8)});
  }
  ${down("mobile")} {
    width: calc(100% / 1 - ${getSpacing(8)});
  }
`;

export const StyledProductContent = styled.figure`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${getSpacing(10)};
  & > img {
    width: ${getSpacing(153.5)};
    height: ${getSpacing(92)};
  }
`;

export const StyledProductInformation = styled.figcaption`
  margin-top: ${getSpacing(10)};
`;

export const StyledProductTitle = styled.p`
  font-weight: ${fontWeight.basic};
  margin: 0;
  font-size: ${fontSize.medium};
  color: ${colorPalette.darkGrey};
`;

export const StyledProductSupInfo = styled.p`
  font-weight: ${fontWeight.normal};
  margin-top: ${getSpacing(2.5)};
  font-size: ${fontSize.medium};
  color: ${colorPalette.doveGrey};
`;
export const StyledProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${getSpacing(5)};
`;

export const StyledProductPrice = styled.span`
  margin-top: ${getSpacing(5)};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
  color: ${colorPalette.darkBlue};
`;

export const StyledBonusContainer = styled.div`
  position: absolute;
  right: 0;
  background: ${colorPalette.vividCerulean};
  width: ${getSpacing(36)};
  height: ${getSpacing(36)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  text-align: center;
  color: ${colorPalette.white};
`;

export const StyledPointsTypographyBold = styled.span`
  display: block;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
`;

export const StyledPointsTypographySmall = styled.span`
  display: block;
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.XSmall};
  margin-top: -${getSpacing(2)};
`;
