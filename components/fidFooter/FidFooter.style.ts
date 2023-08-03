import styled from "styled-components";
import {
  colorPalette,
  down,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

export const StyledFooterContainer = styled.div`
  background-color: ${colorPalette.concrete};
`;
export const StyledDownloadInformation = styled.div`
  max-width: ${getSpacing(640)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: ${getSpacing(131)};

  & > h6 {
    margin-bottom: ${getSpacing(8)};
    font-size: ${fontSize.large};
    color: ${colorPalette.darkBlue};
    font-weight: ${fontWeight.bold};
  }

  & > p {
    text-align: left;
    max-width: ${getSpacing(270)};
    color: ${colorPalette.doveGrey};
    margin: 0;
    padding: 0;
  }
  & span {
    font-weight: ${fontWeight.bold};
  }
  ${down("laptop")} {
    padding: ${getSpacing(14.5, 14, 17.5, 11)};
    & > h6 {
      font-size: ${fontSize.semiLarge};
    }
    & > p {
      text-align: end;
    }
  }
`;

export const StyledFooterContent = styled.div`
  position: relative;
  margin: auto;
  max-width: ${getSpacing(640)};
  margin-top: ${getSpacing(20)};
  background-color: ${colorPalette.concrete};
  display: flex;
  justify-content: flex-start;
  gap: ${getSpacing(22)};
  ${down("tablet")} {
    padding: ${getSpacing(15, 0, 8, 9)};
    gap: ${getSpacing(15)};
  }
  ${down("mobile")} {
    flex-direction: column;
    padding: ${getSpacing(20, 0, 13, 28)};
    margin-top: 0;
  }
`;

export const StyledFidFooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: ${getSpacing(28, 20)};
  gap: ${getSpacing(8)};

  & > h5 {
    font-size: ${fontSize.large};
    color: ${colorPalette.darkBlue};
    font-weight: ${fontWeight.bold};
    margin: 0;
    padding: 0;
  }

  & > a {
    text-decoration: none;
    font-size: ${fontSize.medium};
    color: ${colorPalette.buttonGrey};
    font-weight: ${fontWeight.normal};
  }

  ${down("tablet")} {
    padding: 0;
    max-width: ${getSpacing(115)};
    & > h5 {
      font-size: ${fontSize.semiLarge};
    }
  }
`;

export const StyledIconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${getSpacing(4)};
`;

export const StyledPhoneImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -50%;
  right: 0;

  ${down("laptop")} {
    & > img {
      display: none;
    }
  }

  ${down("mobile")} {
    position: relative;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: ${getSpacing(5)};
    }
  }
`;

export const StyledCopyrightContainer = styled.div`
  padding: ${getSpacing(12, 20)};
  background-color: ${colorPalette.darkBlue};
  display: flex;
  flex-wrap: wrap;
  gap: ${getSpacing(6)};
`;

export const StyledCopyrightContent = styled.span`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.normal};
  color: ${colorPalette.white};
`;
