import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CustomTextField from "~components/inputs/TextField";
import { Control, Controller } from "react-hook-form";
import { ISignUpFields, sigUnpFields } from "~containers/signup/types";
import { default as FrLocale } from "date-fns/locale/fr";
import { customStyle } from "./DatePicker.style";

interface IDatePickerProps {
  label: string;
  control: Control<ISignUpFields>;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
}

const DatePicker: React.FC<IDatePickerProps> = ({ label, placeholder, error, control, errorMessage }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const onDatePickerClickHandler = () => {
    setOpen(true);
  };

  const onDatePickerCloseHandler = () => {
    setOpen(false);
  };

  return (
    <Controller
      control={control}
      name={sigUnpFields.BIRTH_DATE}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={FrLocale}>
          <DesktopDatePicker
            {...field}
            label={label}
            open={open}
            PopperProps={{
              sx: customStyle,
            }}
            onClose={onDatePickerCloseHandler}
            renderInput={(params) => (
              <CustomTextField
                {...params}
                onClick={onDatePickerClickHandler}
                error={error}
                errorMessage={errorMessage}
                inputProps={{
                  ...params.inputProps,
                  placeholder,
                }}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};
export default DatePicker;
