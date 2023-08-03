import { TextField } from "@mui/material";
import styled from "styled-components";
import { borderRadius, colorPalette, down, getSpacing } from "~styles/styleSheet";

export const StyledTextField = styled(TextField)`
  max-width: ${getSpacing(273)};
  width: ${getSpacing(260)};
  ${down("tablet")} {
    width: auto;
  }
  background: ${colorPalette.white};
  border-radius: ${borderRadius.medium};
  .MuiOutlinedInput-input {
    height: ${getSpacing(20)};
  }
`;
