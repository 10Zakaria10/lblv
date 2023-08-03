import styled from "styled-components";
import { colorPalette, fontSize, fontWeight } from "~styles/styleSheet";

interface IStyledPointColumn {
  points: number;
}

export const StyledPointColumn = styled.span<IStyledPointColumn>`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
  color: ${({points}) => (points >=0 ? colorPalette.vividCerulean: colorPalette.red)};
`;
