import { Checkbox } from "@mui/material";
import styled from "styled-components";
import { getSpacing, up, down, colorPalette, fontWeight, fontSize } from "~styles/styleSheet";

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: ${getSpacing(0, 50, 10, 50)};

  ${up("laptop")} {
    max-width: ${getSpacing(250)};
  }

  ${down("laptop")} {
    width: 66%;
  }
  ${down("mobile")} {
    width: auto;
    margin: ${getSpacing(0, 20, 10, 20)};
  }
`;

export const InputWrapper = styled.div`
  margin-top: ${getSpacing(12)};
`;
export const LoginButtonWrapper = styled.div`
  margin-top: ${getSpacing(12)};
  display: flex;
  & button {
    width: 100%;
    & div{
      justify-content: center;
      font-weight: ${fontWeight.bold};
      font-size: ${fontSize.medium};
    }
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: ${getSpacing(12)};
`;
export const CheckboxIcon = styled(Checkbox)`
  color: "primary";
  border-color: ${colorPalette.grey};
`;

export const Form = styled.form`
  margin-top: ${getSpacing(15)};
`;