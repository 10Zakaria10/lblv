import React from "react";

import {
  LabelWrapper,
  StyledErrorLabel,
  StyledInput,
  StyledInputLabel,
  StyledWarningAmberIcon,
  ToolTipIcon,
} from "./style";
import { getTextfieldType, PasswordVisibility } from "./utils";

import type { UseFormRegisterReturn } from "react-hook-form";
import { TextFieldProps, Tooltip } from "@mui/material";

interface IStyledTextField extends Omit<TextFieldProps, "variant"> {
  register?: UseFormRegisterReturn;
  error?: boolean;
  inputType?: "text" | "password" | "email";
  toolTipMessage?: string;
  errorMessage?: string;
}

const CustomTextField: React.FC<IStyledTextField> = ({
  label,
  error,
  errorMessage,
  inputType = "text",
  toolTipMessage,
  register,
  ...restProps
}: IStyledTextField) => {
  const [showPassword, hidePassword] = React.useState<boolean>(false);

  const handleChangePasswordVisibility = () => {
    hidePassword(!showPassword);
  };

  return (
    <>
      <LabelWrapper>
        <StyledInputLabel>{label}</StyledInputLabel>
        {error && <StyledWarningAmberIcon />}
        {toolTipMessage && (
          <Tooltip title={toolTipMessage} placement="right">
            <ToolTipIcon />
          </Tooltip>
        )}
      </LabelWrapper>
      <StyledInput
        error={error}
        margin="none"
        fullWidth
        type={getTextfieldType(inputType, showPassword)}
        {...register}
        {...restProps}
        InputProps={{
          endAdornment: (
            <PasswordVisibility
              type={inputType}
              showPassword={showPassword}
              handleChangePasswordVisibility={handleChangePasswordVisibility}
            />
          ),
        }}
      />
      {<StyledErrorLabel>{error && errorMessage}</StyledErrorLabel>}
    </>
  );
};
export default CustomTextField;
