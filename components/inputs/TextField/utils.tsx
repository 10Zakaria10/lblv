import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import type { HTMLInputTypeAttribute } from "react";

const passwordAdornment = (showPassword: boolean, handleChangePasswordVisibility: () => void) => {
  return (
    <InputAdornment position="end">
      <IconButton aria-label="Toggle password visibility" onClick={handleChangePasswordVisibility}>
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};
interface IPasswordVisibility {
  type: string;
  showPassword: boolean;
  handleChangePasswordVisibility: () => void;
}
export const PasswordVisibility = ({ type, showPassword, handleChangePasswordVisibility }: IPasswordVisibility) => {
  return type === "password" ? passwordAdornment(showPassword, handleChangePasswordVisibility) : null;
};

export const getTextfieldType = (
  type: string | undefined,
  showPassword: boolean,
): HTMLInputTypeAttribute | undefined => {
  if (type === "password") return showPassword ? "text" : "password";
  return type;
};
