import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { fontSize, colorUsage, fontWeight, lineHeight, getSpacing, colorPalette } from "~styles/styleSheet";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { HelpOutlineOutlined } from "@mui/icons-material";

export const StyledInputLabel = styled.label`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.normal};
  color: ${colorUsage.inputLabel};
  line-height: ${lineHeight.medium};
`;
export const StyledInput = styled(TextField)`
  .MuiOutlinedInput-root {
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.normal};
    color: ${colorUsage.basicText};
    line-height: ${lineHeight.medium};
    border-radius: ${getSpacing(4)};
    height: ${getSpacing(20)};
    margin-top: ${getSpacing(1)};
    border-color: ${(props) => (props.error ? colorPalette.red : colorPalette.black)};
  }
  .MuiFormControl-root-MuiTextField-root {
    margin-top: ${getSpacing(1)};
  }
`;
export const StyledErrorLabel = styled.span`
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.normal};
  color: ${colorUsage.errorMessage};
  line-height: ${lineHeight.medium};
`;
export const StyledWarningAmberIcon = styled(WarningAmberRoundedIcon)`
  color: ${colorUsage.errorMessage};
  padding-bottom: ${getSpacing(2)};
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ToolTipIcon = styled(HelpOutlineOutlined)`
  margin: ${getSpacing(0, 0, 3, 3)};
`;
