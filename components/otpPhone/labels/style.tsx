import styled from "styled-components";
import {
  colorUsage,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from "~styles/styleSheet";

export const DescriptionLabel = styled.label`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  color: ${colorUsage.basicText};
  font-family: ${fontFamily.main};
`;
export const DescriptionPhoneNumber = styled.span`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  color: ${colorUsage.basicText};
  font-family: ${fontFamily.main};
`;
