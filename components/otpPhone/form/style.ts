import { Typography } from "@mui/material";
import styled from "styled-components";
import {
  colorPalette,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

export const TypographyBold = styled(Typography)`
  font-family: ${fontFamily.main};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
  line-height: 130%;
  text-align: center;
`;
export const ElementWrapper = styled.div`
  margin: 16px;
`;
export const ResendLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${getSpacing(17, 8)};
  padding-left: ${getSpacing(2.5)};
  padding-right: ${getSpacing(2.5)};
`;
export const TimerLabelWrapper = styled.div`
  margin: ${getSpacing(8)};
  padding-left: ${getSpacing(28)};
  padding-right: ${getSpacing(28)};
`;
export const TypographyBoldWrapper = styled.div`
  margin-top: ${getSpacing(20)};
  margin-bottom: ${getSpacing(8)};
`;
export const TimerLabel = styled(Typography)`
  font-family: ${fontFamily.main};
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  line-height: 130%;
  text-align: center;
`;
export const ResendLabel = styled(Typography)<{ enabled: boolean }>`
  font-family: ${fontFamily.main};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.medium};
  line-height: 130%;
  text-align: center;
  color: ${(props) =>
    props.enabled ? colorPalette.defaultBlue : colorPalette.grey};
  text-decoration-line: underline;
  cursor: pointer;
`;
export const AttemptCountLabel = styled(Typography)`
  font-family: ${fontFamily.main};
  font-style: italic;
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.XSmall};
  line-height: 130%;
  text-align: center;
  color: ${colorPalette.grey};
`;
export const AttemptCount = styled.span`
  font-family: ${fontFamily.main};
  font-style: italic;
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.XSmall};
  line-height: 130%;
  text-align: center;
  color: ${colorPalette.blue};
`;
export const FormWrapper = styled.div`
  padding: ${getSpacing(2.5)};
`;

export const OrTyphography = styled.span`
  margin: ${getSpacing(6, 0)};
`;
