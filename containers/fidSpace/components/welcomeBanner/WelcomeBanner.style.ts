import styled from "styled-components";
import {
  colorPalette,
  down,
  fontSize,
  fontWeight,
  getSpacing,
  ZIndex,
} from "~styles/styleSheet";

export const StyledWelcomeBanner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${getSpacing(9, 12)};
  background-color: ${colorPalette.lightBlueGrey};
  border-radius: ${getSpacing(5)};
  ${down("mobile")} {
    flex-direction: column;
    align-items: center;
    gap: ${getSpacing(5)};
  }
`;

export const StyledBannerCards = styled.div`
  display: flex;
  justify-content: center;
  margin-inline-end: ${getSpacing(15)};

  ${down("laptop")} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-inline: ${getSpacing(13.5, 0)};
    gap: ${getSpacing(10)};
  }

  ${down("mobile")} {
    align-items: center;
    margin-inline: ${getSpacing(0, 0)};
  }
`;

export const StyledBannerLogo = styled.div`
  position: absolute;
  ${down("tablet")} {
    left: -${getSpacing(130)};
  }
`;

export const StyledBannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  & > div {
    z-index: ${ZIndex.z_10};
  }

  ${down("mobile")} {
    text-align: center;
  }
`;

export const StyledBannerTitle = styled.p`
  text-decoration: none;
  font-weight: ${fontWeight.bolder};
  font-size: ${fontSize.large};
  color: ${colorPalette.vividCerulean};
  margin: 0;
  padding: 0;
`;

export const StyledBannerSolde = styled.p`
  text-decoration: none;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
  color: ${colorPalette.darkGrey};
  & > span {
    font-weight: ${fontWeight.bolder};
    color: ${colorPalette.defaultBlue};
  }
`;

export const StyledBannerInfo = styled.p`
  text-decoration: none;
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  color: ${colorPalette.darkBlue};
  margin: ${getSpacing(5, 0)};
  padding: 0;
  max-width: ${getSpacing(210)};

  ${down("tablet")} {
    max-width: ${getSpacing(163)};
    margin: 0;
  }

  ${down("mobile")} {
    max-width: "100%";
    text-align: center;
    font-size: ${fontSize.small};
  }
`;

export const StyledBannerProfileCompletion = styled.div`
  display: flex;
  align-items: center;
  & > a {
    text-decoration: none;
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.medium};
    color: ${colorPalette.defaultBlue};
    margin-inline: ${getSpacing(4, 8)};
    text-decoration-line: underline;
  }
`;

export const StyledPinPopupContainer = styled.div`
display: flex;
flex-direction: column;
padding: ${getSpacing(0, 27, 16, 27.5)};
gap: ${getSpacing(10)};
`
export const StyledPinPopupHeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: ${getSpacing(7)};
`
export const StyledCodePinPopupTitle = styled.p`
margin: 0;
font-size: ${fontSize.medium};
font-weight: ${fontWeight.bold};
`

export const StyledCodeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${colorPalette.lightBlueGrey};
padding: ${getSpacing(11, 17)};
gap: ${getSpacing(5)};
border-radius: ${getSpacing(2)};
`

export const StyledCodePin = styled.p`
margin: 0;
color: ${colorPalette.defaultBlue};
font-size: ${fontSize.XXLarge};
font-weight: ${fontWeight.bold};
`

export const StyledCodePinDesc = styled.p`
margin: 0;
text-align: center;
max-width: ${getSpacing(136)};
font-size: ${fontSize.XSmall};
`


