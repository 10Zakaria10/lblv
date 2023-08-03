import styled from "styled-components";
import { down, getSpacing } from "~styles/styleSheet";

export const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  ${down("mobile")} {
    width: ${getSpacing(19)};
    height: ${getSpacing(13)};
  }
`;
