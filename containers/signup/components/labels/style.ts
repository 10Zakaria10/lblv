import { fontSize, fontWeight, lineHeight } from "~styles/styleSheet";

import styled from "styled-components";

export const UnderlinedText = styled.span`
  text-decoration: underline;
  font-weight: ${fontWeight.bold};
`;

export const CGLabelSpan = styled.span`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
`;
