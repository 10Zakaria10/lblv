import * as React from "react";
import { StyledDialog, StyledDialogContent } from "./Popup.style";
import StyledDialogTitle from "./DialigTitle";

interface IDialog {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  dialogTitle?: string;
}

const Dialog: React.FC<IDialog> = ({
  isOpen,
  setOpen,
  children,
  dialogTitle,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      maxWidth={"xl"}
    >
      <StyledDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {dialogTitle}
      </StyledDialogTitle>
      <StyledDialogContent> {children}</StyledDialogContent>
    </StyledDialog>
  );
};
export default Dialog;
