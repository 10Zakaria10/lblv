import styled from "styled-components";
import CustomTooltip from "~components/customTooltip/customTooltip";
import {
  colorPalette,
  up,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${getSpacing(12, 20)};
  background: ${colorPalette.white};
  box-shadow: ${getSpacing(0, 0, 8)} ${colorPalette.black}0f;
`;

export const StyledLogoContainer = styled.div`
  > img {
    width: ${getSpacing(85)};
    height: ${getSpacing(22)};
  }
`;

export const StyledHeaderItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNavItem = styled.a`
  text-decoration: none;
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  color: ${colorPalette.darkGrey};
  margin-inline-end: ${getSpacing(8)};
  ${up("laptop")} {
    margin-inline-end: ${getSpacing(16)};
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: ${getSpacing(4)};
`;

export const StyledUtilsContainer = styled.div`
  display: flex;
  & svg, & > div {
    margin-inline-end: ${getSpacing(6)};
    cursor: pointer;
    ${up("laptop")} {
      margin-inline-end: ${getSpacing(6)};
      margin-inline-end: ${getSpacing(12)};
    }
  }
`;
export const Bullet = styled.div`
    position:absolute;
    height: ${getSpacing(4)};
    width: ${getSpacing(4)};
    border-radius: ${getSpacing(2)};
    background-color:${colorPalette.red};
    z-index:1500;
    border: ${getSpacing(0.5)} solid ${colorPalette.defaultBlue};
    box-sizing: border-box;
    top:  ${getSpacing(2)};
    left:  ${getSpacing(6.5)};
`;
export const StyledTooltip = styled(CustomTooltip)`
  & .MuiTooltip-tooltip {
    background-color: ${colorPalette.borderGray};
    box-shadow: ${getSpacing(0,0,16)} rgba(0, 0, 0, 0.1);
    border-radius:  ${getSpacing(4.5)};
    width: ${getSpacing(187.5)};
    margin-top:${getSpacing(10)};
    padding: unset;
    max-width: unset;
  }
  & .MuiTooltip-arrow {
    color: ${colorPalette.white};
  }
`;