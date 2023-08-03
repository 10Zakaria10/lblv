import { SxProps } from "@mui/material";
import { colorPalette, getSpacing } from "~styles/styleSheet";

export const customStyle: SxProps = {
  "& .PrivatePickersSlideTransition-root": { minHeight: getSpacing(110) },
  "& .Mui-selected": { backgroundColor: colorPalette.defaultBlue },
};
