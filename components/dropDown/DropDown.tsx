import { MenuItem } from "@mui/material";
import type { FC } from "react";
import { StyledDropDown, StyledDropDownContainer } from "./DropDown.style";
import { DropDownValueType, OptionsType } from "./types";

interface IDropDown {
  placeHolder?: OptionsType;
  value: DropDownValueType;
  onChange: (newValue: DropDownValueType) => void;
  options: OptionsType[];
  isDisabled?: boolean;
}

const DropDown: FC<IDropDown> = ({
  placeHolder,
  value,
  onChange,
  options,
  isDisabled,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as DropDownValueType);
  };
  return (
    <StyledDropDownContainer>
      <StyledDropDown
        disabled={isDisabled || false}
        select
        id="id-select"
        value={value}
        onChange={handleChange}
        size={"small"}
      >
        {placeHolder && (
          <MenuItem disabled value={placeHolder.value}>
            {placeHolder.label}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledDropDown>
    </StyledDropDownContainer>
  );
};

export default DropDown;
