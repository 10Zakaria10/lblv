import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { StyledTextField } from "./IconTextField.style";
import { OutlinedInputProps } from "@mui/material";
interface IIconTextField {
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
  InputProps?: Partial<OutlinedInputProps>;
  placeholder?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
const IconTextField: React.FC<IIconTextField> = ({ iconStart, iconEnd, InputProps, onChange, ...props }) => {
  return (
    <StyledTextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? <InputAdornment position="start">{iconStart}</InputAdornment> : null,
        endAdornment: iconEnd ? <InputAdornment position="end">{iconEnd}</InputAdornment> : null,
      }}
      onChange={onChange}
    />
  );
};
export default IconTextField;
