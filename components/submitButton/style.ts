import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

import styled from "styled-components";
import { LoadingButton } from "@mui/lab";

export const StyledSubmitButton = styled(LoadingButton)`
  border-radius: ${getSpacing(15)};
  height: ${getSpacing(20)};
  margin-top: ${getSpacing(2)};
  background-color: ${colorPalette.defaultBlue};
  color: ${colorPalette.white};
  border: 1px solid ${colorPalette.defaultBlue};
  text-transform: none;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
  &:hover:enabled {
    background-color: ${colorPalette.white};
    color: ${colorPalette.defaultBlue};
    border: 1px solid ${colorPalette.defaultBlue};
    cursor: pointer;
  }
  &:disabled {
    background-color: ${colorPalette.lightGrey};
    border-color: ${colorPalette.buttonGrey};
    color: ${colorPalette.buttonGrey};
  }
`;
