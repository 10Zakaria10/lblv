import styled from "styled-components";
import {
  borderRadius,
  boxShadow,
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from "~styles/styleSheet";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Button } from "@mui/material";

export const ChooseMainStoreBackground = styled.div`
  padding: ${getSpacing(12)};
  gap: ${getSpacing(12)};
  background: ${colorPalette.lightBlueGrey};
  box-shadow: ${boxShadow.level2};
  border-radius: ${borderRadius.medium};
  margin-top: ${getSpacing(26)};
`;
export const Title = styled.text`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${getSpacing(0)};
  gap: ${getSpacing(8)};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
  line-height: ${lineHeight.medium};
  color: ${colorPalette.darkBlue}; ;
`;
export const Description = styled.text`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  align-items: center;
  color: ${colorPalette.darkBlue};
`;
export const ChooseStoreBtn = styled(Button)`
  padding: ${getSpacing(4, 8)};
  gap: ${getSpacing(4)};
  background: ${colorPalette.defaultBlue};
  border-radius: ${borderRadius.XxLarge};
  color: ${colorPalette.white};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.small};
  line-height: ${lineHeight.medium};
  text-align: center;
  border-color: ${colorPalette.defaultBlue};
  & > span {
    font-weight: ${fontWeight.bold};
    text-align: center;
    color: ${colorPalette.defaultBlue};
  }
  &:hover {
    text-decoration: none;
  }
`;
export const StoreIcon = styled(StorefrontIcon)`
  width: ${getSpacing(20)};
  height: ${getSpacing(20)};
  padding: ${getSpacing(4)};
  background: ${colorPalette.white};
  border-radius: ${getSpacing(200)};
`;
export const SpaceWrapper = styled.div`
  margin-top: ${getSpacing(12)};
`;
