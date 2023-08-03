import styled from "styled-components";
import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from "~styles/styleSheet";

export const Form = styled.form`
  margin-top: ${getSpacing(5)};
  & > h1 {
    margin-bottom: 0;
  }
`;

export const ListItem = styled.li`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  color: ${colorPalette.grey};
`;

export const SubTitle = styled.h4`
  margin: ${getSpacing(5, 0, 15, 0)};
  font-weight: normal;
  color: ${colorPalette.darkGrey};
`;
