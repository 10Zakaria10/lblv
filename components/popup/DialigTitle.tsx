import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { StyledIconButton, StyledTitle, StyledDialogTitleWrapper } from "./Popup.style";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const StyledDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <StyledDialogTitleWrapper {...other}>
      <StyledTitle>{children}</StyledTitle>
      {onClose && (
        <StyledIconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </StyledIconButton>
      )}
    </StyledDialogTitleWrapper>
  );
};
export default StyledDialogTitle;
