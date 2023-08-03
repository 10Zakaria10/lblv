import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledActivityColumnContainer = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-inline-start: ${getSpacing(12)};
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.medium};
    color: ${colorPalette.darkGrey};
  }
`;