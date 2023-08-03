import { Button } from "@mui/material";
import styled from "styled-components";
import {
  getSpacing,
  colorPalette,
  borderRadius,
  fontWeight,
  fontSize,
  lineHeight,
  colorUsage,
  down,
} from "~styles/styleSheet";

export const GeolocationBtn = styled(Button)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: ${getSpacing(0, 14)};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  font-weight: ${fontWeight.bold};
  color: ${colorUsage.defaultText};
  border: 1px solid ${colorUsage.defaultText};
  border-radius: ${borderRadius.XxLarge};
  background-color: ${colorPalette.white};
  height: ${getSpacing(20)};
  text-transform: none;
`;
export const DialogContentWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: ${getSpacing(2, 0, 2, 16)};
`;
export const SearchAndGeolocationWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex: 2;
  width: 100%;
  margin: ${getSpacing(8, 0)};
  flex-wrap: wrap;
`;
export const SearchORGeolocationText = styled.text`
  margin: ${getSpacing(3, 13)};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  font-weight: ${fontWeight.normal};
  color: ${colorPalette.grey};
`;
export const StoreFilterMapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${getSpacing(5, 0, 0, 14)};
  flex-wrap: wrap;
`;
export const FilterTitle = styled.text`
  margin: ${getSpacing(0, 0, 4, 16)};
  font-size: ${fontSize.small};
  line-height: ${lineHeight.medium};
  font-weight: ${fontWeight.normal};
  color: ${colorPalette.grey};
`;
export const StoresListAndMapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${getSpacing(16, 0, 0, 0)};
  flex-wrap: wrap;
`;
export const StoresListWrapper = styled.div`
  width: 50%;
`;
export const MapStoresWrapper = styled.div`
  width: ${getSpacing(620)} ;
  display: flex;
  margin-top: ${getSpacing(20)};
  flex : 1 1 auto;
  ${down("tablet")} {
      width: 100%;
  }
  ${down("mobile")} {
      width:100%;
      flex-direction: column;
      gap:${getSpacing(0)};
  }
`
export const DialogContentHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
