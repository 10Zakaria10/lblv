import styled from "styled-components";
import {
  borderRadius,
  colorPalette,
  colorUsage,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from "~styles/styleSheet";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const GoToFidelitySpaceWrapper = styled.div`
  margin: ${getSpacing(30, 0)};
  display: flex;
  justify-content: end;
`;

export const GoToFidelitySpace = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${getSpacing(4, 8)};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  font-weight: ${fontWeight.bold};
  color: ${colorUsage.defaultText};
  border: 1px solid ${colorUsage.defaultText};
  border-radius: ${borderRadius.XxLarge};
  background-color: ${colorPalette.white};
  cursor: pointer;

`;
export const MainTitle = styled.text`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
  line-height: ${lineHeight.large};
  color: ${colorPalette.darkGrey};
`;
export const Description = styled.text`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  color: ${colorPalette.grey};
`;
export const StyledForwardIcon = styled(ArrowForwardIcon)`
  margin-inline-start: ${getSpacing(3)};
  display: flex;
  align-self: flex-start;
`;
