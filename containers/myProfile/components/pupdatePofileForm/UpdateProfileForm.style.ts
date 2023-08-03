import { colorPalette, colorUsage, down, fontSize, fontWeight, getSpacing, lineHeight } from "~styles/styleSheet";
import { LoadingButton } from "@mui/lab";

import styled from "styled-components";
import { TextField } from "@mui/material";

export const MyProfileFormContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  ${down("laptop")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${getSpacing(10)};
  }

  ${down("mobile")} {
    align-items: center;
  }
`;
export const InputWrapper = styled.div`
  margin-top: ${getSpacing(12)};
  paddin-left: ${getSpacing(2)};
  width: 80%;
`;
export const ButtonWrapper = styled.div`
  margin-top: ${getSpacing(12)};
`;
export const StyledSubmitButton = styled(LoadingButton)`
  border-radius: ${getSpacing(15)};
  height: ${getSpacing(20)};
  margin-top: ${getSpacing(2)};
`;

export const StyledSelectWrapper = styled.div`
  margin-top: ${getSpacing(12)};
`;
export const StyledSelect = styled(TextField)`
  .MuiOutlinedInput-root {
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.normal};
    color: ${colorUsage.basicText};
    line-height: ${lineHeight.medium};
    border-radius: ${getSpacing(4)};
    height: ${getSpacing(22)};
    margin-top: ${getSpacing(1)};
    border-color: ${(props) => (props.error ? colorPalette.red : colorPalette.black)};

  }
  .MuiFormControl-root-MuiTextField-root {
    margin-top: ${getSpacing(0)};
  }
`;
