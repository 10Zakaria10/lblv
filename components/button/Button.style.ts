import styled from "styled-components";
import { colorPalette, fontWeight, getSpacing } from "~styles/styleSheet";

interface ButtonContentProps {
  hasTextAndIcon?: boolean;
}

export const StyledButton = styled.button`
  &.baseButton {
    border-radius: ${getSpacing(15)};
    padding: ${getSpacing(4, 8)};
    text-transform: none;
  }
  &.filled {
    background-color: ${colorPalette.defaultBlue};
    color: ${colorPalette.white};
    border: 1px solid ${colorPalette.defaultBlue};
    &:hover:enabled {
      background-color: ${colorPalette.white};
      color: ${colorPalette.defaultBlue};
      border: 1px solid ${colorPalette.defaultBlue};
      cursor: pointer;
    }
  }
  &.outlined {
    background-color: ${colorPalette.white};
    color: ${colorPalette.defaultBlue};
    border: 1px solid ${colorPalette.defaultBlue};
    &:hover:enabled {
      background-color: ${colorPalette.defaultBlue};
      color: ${colorPalette.white};
      cursor: pointer;
    }
  }
  &.error{
    background-color: ${colorPalette.lightRed};
    border: 1px solid ${colorPalette.lightRed};
    color: ${colorPalette.red};
  }
  &:disabled {
    background-color: ${colorPalette.lightGrey};
    border-color: ${colorPalette.buttonGrey};
    color: ${colorPalette.buttonGrey};
  }
`;

export const StyledButtonContent = styled.div<ButtonContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-weight: ${fontWeight.bold};
    margin-inline-start: ${({ hasTextAndIcon }) =>
      hasTextAndIcon ? getSpacing(5) : 0};
  }
`;
