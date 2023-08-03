import { WarningAmber } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const ErrorContainer = styled.div`
  width: 100%;
  background-color: ${colorPalette.lightRed};
  padding: ${getSpacing(8, 4)};
  display: flex;
  justify-content: space-between;
`;
export const ErrorMessage = styled.span`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
  width: 90%;
`;

export const WarningIcon = styled(WarningAmber)`
  color: ${colorPalette.red};
  margin-inline-end: ${getSpacing(4)};
`;

export const CloseButton = styled(IconButton)`
  padding: 0;
`;
