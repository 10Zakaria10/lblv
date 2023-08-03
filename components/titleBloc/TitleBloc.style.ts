import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
  text-decoration-line: underline;
  color: ${colorPalette.defaultBlue};
`;

export const StyledBlocDescription = styled.p`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
  color: ${colorPalette.doveGrey};
  max-width: ${getSpacing(205)};;
  margin: 0;
`;

export const StyledHeading = styled.h2`
  margin: 0;
  color: ${colorPalette.darkGrey};
`;
