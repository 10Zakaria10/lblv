import styled from "styled-components";
import {
  borderRadius,
  colorPalette,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

export const containerStyle = {
  padding: `${getSpacing(15, 0, 5, 0)} `,
  justifyContent: "center",
};

export const inputStyle = (isValid: boolean) => ({
  fontFamily: fontFamily.main,
  fontStyle: "normal",
  fontWeight: fontWeight.bold,
  fontSize: getSpacing(13),
  lineHeight: "130%",
  width: getSpacing(28),
  height: getSpacing(32),
  padding: `${getSpacing(5)} ${getSpacing(8)} ${getSpacing(5)} ${getSpacing(8)}`,
  borderRadius: borderRadius.medium,
  border: `1px solid  ${isValid ? colorPalette.grey : colorPalette.red}`,
  margin: getSpacing(2.5),
});

export const OtpInputWrapper = styled.div`
  margin-top: ${getSpacing(10)};
  margin-bottom: ${getSpacing(10)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${getSpacing(0, 20)};
`;
export const ErrorOtp = styled.span`
  font-family: ${fontFamily.main};
  font-style: italic;
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  text-align: left;
  color: ${colorPalette.red};
`;
export const ErrorOtpWrapper = styled.div`
  justify-content: center;
`;
