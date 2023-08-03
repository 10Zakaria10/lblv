import { Button } from "@mui/material";
import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const Form = styled.form`
  margin-top: ${getSpacing(5)};
  & > h1 {
    margin-bottom: 0;
  }
`;

export const SubTitle = styled.h4`
  margin: ${getSpacing(5, 0, 15, 0)};
  font-weight: normal;
  color: ${colorPalette.darkGrey};
`;

export const SessionInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${getSpacing(7)}; ;
`;

export const StyledLink = styled.a`
  font-weight: ${fontWeight.bold};
  color: ${colorPalette.defaultBlue};
  margin: auto 0;
`;

export const FirstTimeLoginContainer = styled.div`
  margin-top: ${getSpacing(12)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colorPalette.lightBlueGrey};
  padding: ${getSpacing(8)};
`;

export const StyledParagraph = styled.p`
  margin: 0;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
  color: ${colorPalette.darkBlue};
  padding: ${getSpacing(0, 16)};
  text-align: center;
`;

export const FirstTimeLoginButton = styled(Button)`
  border-radius: ${getSpacing(15)};
  padding: ${getSpacing(4, 21)};
  margin-top: ${getSpacing(8)};
  background-color: ${colorPalette.white};
  color: ${colorPalette.defaultBlue};
  border: ${getSpacing(0.5)} solid ${colorPalette.defaultBlue};
  & > span {
    font-weight: ${fontWeight.bold};
    text-align: center;
    color: ${colorPalette.defaultBlue};
  }
`;

export const BackToSignUpContainer = styled(FirstTimeLoginContainer)`
  background-color: ${colorPalette.white};
  & > a {
    margin-top: ${getSpacing(3)};
  }
`;
