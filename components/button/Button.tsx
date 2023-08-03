import type { FC } from "react";
import { StyledButton, StyledButtonContent } from "./Button.style";

export enum ButtonType {
  FILLED = "filled",
  OUTLINED = "outlined",
  ERROR = "error",
}

interface IButton {
  text?: string;
  startIcon?: React.ReactNode;
  buttonType?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<IButton> = ({
  text,
  startIcon,
  buttonType,
  disabled,
  onClick,
}) => {
  const getClassNameFromType = () => {
    return buttonType?.toString() || ButtonType.FILLED;
  };

  const getClassName = (): string => {
    return ` baseButton ${getClassNameFromType()}`;
  };

  const hasTextAndIcon = (text && startIcon) !== undefined;
  return (
    <StyledButton
      className={getClassName()}
      disabled={disabled}
      onClick={onClick}
    >
      <StyledButtonContent hasTextAndIcon={hasTextAndIcon}>
        {startIcon}
        <span>{text}</span>
      </StyledButtonContent>
    </StyledButton>
  );
};

export default Button;
