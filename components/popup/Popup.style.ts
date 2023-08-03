import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import {
  colorPalette,
  fontWeight,
  fontSize,
  lineHeight,
  getSpacing,
  down,
} from "~styles/styleSheet";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import DialogContent from "@mui/material/DialogContent";

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root-MuiDialog-paper {
    max-width: 100%;
    height: fit-content;
    width: fit-content;
  }
  .MuiDialogContent-root {
    width: 100%;
    height: 100%;
  }
`;

export const StyledTitle = styled(Typography)`
  color: ${colorPalette.darkGrey};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.XLarge};
  line-height: ${lineHeight.medium};
  padding: ${getSpacing(5, 0, 3, 4)};
`;

export const StyledDialogTitleWrapper = styled(DialogTitle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${getSpacing(5, 5, 0, 5)};
`;

export const StyledIconButton = styled(IconButton)`
  ${down("mobile")} {
    position: "absolute";
    right: ${getSpacing(4)};
    top: ${getSpacing(4)};
    color: ${colorPalette.grey};
  }
`;
export const StyledDialogContent = styled(DialogContent)`
  padding: 0;
  overflow-y: hidden;
  &:hover{
    overflow-y: overlay;
  }
`;
