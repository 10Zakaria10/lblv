import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "~styles/styleSheet";

export const CountDownLabel = styled.span`
  font-family: ${fontFamily.main};
  font-style: italic;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.small};
  line-height: 150%;
`;
