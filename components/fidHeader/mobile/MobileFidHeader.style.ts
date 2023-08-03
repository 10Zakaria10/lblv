import styled from "styled-components";
import { colorPalette, down, getSpacing } from "~styles/styleSheet";

export const StyledMobileHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${getSpacing(12, 16)};
  background: ${colorPalette.white};
  box-shadow: ${getSpacing(0, 0, 8)} ${colorPalette.black}0f;
`;

export const StyledMobileNavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: calc((100% / 3) - 0.1px);
  & > svg {
    margin-inline-end: ${getSpacing(17)};
    ${down("tablet")} {
      margin-inline-end: ${getSpacing(10)};
    }
  }
`;

export const StyledMobileLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: calc((100% / 3) - 0.1px);
`;

export const StyledMobileUtilsContainer = styled.div`
  width: calc((100% / 3) - 0.1px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > svg, & > div {
    margin-inline-end: ${getSpacing(17)};
    cursor: pointer;
    ${down("tablet")} {
      margin-inline-end: ${getSpacing(10)};
    }
  }
`;
