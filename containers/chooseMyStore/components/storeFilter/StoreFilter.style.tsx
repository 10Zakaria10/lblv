import styled from "styled-components";
import { borderRadius, colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";
import { Button } from "@mui/material";

export const StoreFilterStoreBtn = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${getSpacing(2, 6)};
  background: ${(props) => isStoreFilterBtnActive(props.color)};
  border: 1px solid ${colorPalette.defaultBlue};
  border-radius: ${borderRadius.medium};
  height: ${getSpacing(16)};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.small};
  line-height: 150%;
  color: ${colorPalette.defaultBlue};
  margin: ${getSpacing(0, 3)};
  gap: ${getSpacing(4)};
`;
export const isStoreFilterBtnActive = (color: string | undefined) => {
  return color === "primary" ? colorPalette.lightBlueGrey : colorPalette.white;
};
