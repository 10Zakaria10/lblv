import * as React from "react";

import { StyledFormControlLabel, StyledFormLabel } from "./styles";

import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { IGender } from "~types/gender";

export enum GenderEnum {
  M = "M",
  MME = "MME",
  MLLE = "MLLE",
}
interface IGenderRadioGroupBtn<T extends FieldValues>{
  control: Control<T>;
  wording: IGender;
  name: string;
}

const GenderRadioGroupBtn=<T extends FieldValues>({ control, wording ,name}:IGenderRadioGroupBtn<T>) => {
  return (
    <FormControl>
      <StyledFormLabel id="demo-row-radio-buttons-group-label">{wording.label}</StyledFormLabel>
  <Controller
        control={control}
        name={name as Path<T>}
        render={({ field }) => (
          <RadioGroup row {...field}>
            <StyledFormControlLabel value={GenderEnum.M} control={<Radio />} label={wording.values.M} />
            <StyledFormControlLabel value={GenderEnum.MME} control={<Radio />} label={wording.values.MME} />
            <StyledFormControlLabel value={GenderEnum.MLLE} control={<Radio />} label={wording.values.MLLE} />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
export default GenderRadioGroupBtn;
