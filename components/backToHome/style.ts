import { colorPalette, down, fontSize, fontWeight, getSpacing, lineHeight } from "~styles/styleSheet";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import styled from "styled-components";

export const BackToHomeWrapper = styled.div`
  margin-left: ${getSpacing(6)};
  display: flex;
  align-items: left;
  cursor: pointer;
`;

export const BackToHomeLabel = styled.label`
  color: ${colorPalette.blue};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.medium};
  margin-left: ${getSpacing(4)};
  cursor: pointer;
`;

export const StyledIcon = styled(ArrowBackRoundedIcon)`
  color: ${colorPalette.blue};
  width: ${getSpacing(9)};
  ${down("mobile")} {
    color: ${colorPalette.darkBlue};
    width: ${getSpacing(15)};
    height: ${getSpacing(15)};
  }
`;
