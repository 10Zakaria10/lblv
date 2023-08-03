import { colorPalette, colorUsage, fontSize, fontWeight, getSpacing, lineHeight } from "~styles/styleSheet";

import styled from "styled-components";

export const SignInBlockWrapper = styled.div`
  font-weight: ${fontWeight.bold};
  color: ${colorUsage.inputLabel};
  line-height: ${lineHeight.medium};
  height: ${getSpacing(46)};
  background-color: ${colorPalette.lightBlueGrey};
  margin-top: ${getSpacing(16)};
  border-radius: ${getSpacing(4)};
  text-align: center;
  padding: ${getSpacing(8)};
`;

export const SignInBlockLabel = styled.label`
  color: ${colorPalette.darkBlue};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
`;

export const SignUpLabel = styled.label`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  color: ${colorPalette.blue};
  text-decoration: underline;
  cursor: pointer;
`;
