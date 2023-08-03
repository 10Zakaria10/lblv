import {
  colorPalette,
  down,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from "~styles/styleSheet";

import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(10)};
  padding: ${getSpacing(28, 16)};
  margin-bottom: ${getSpacing(40)};
  ${down("laptop")} {
    padding: ${getSpacing(28, 10)};
  }
`;
export const SettingsTitle = styled.div`
  font-size: ${fontSize.larger};
  line-height: ${lineHeight.large};
  color: ${colorPalette.darkGrey};
  font-weight: ${fontWeight.bolder};
`;

export const SettingsMenuCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-inline-end: ${getSpacing(15)};
  margin-top: ${getSpacing(25)};
  ${down("laptop")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-inline: ${getSpacing(13.5, 0)};
    gap: ${getSpacing(10)};
  }

  ${down("mobile")} {
    align-items: center;
    margin-inline: ${getSpacing(0, 0)};
  }
`;
export const SettingsMenuCard = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-inline-start: ${getSpacing(8)};
  padding: ${getSpacing(20, 5, 20, 5)};
  background-color: ${colorPalette.white}cc;
  border-radius: ${getSpacing(8)};
  box-shadow: ${getSpacing(0, 0, 8)} ${colorPalette.black}0f;
  max-height: ${getSpacing(110)};
  min-width: ${getSpacing(95)};
  border: none;
  cursor: pointer;
  ${down("laptop")} {
    margin-inline-start: ${getSpacing(4)};
    max-height: ${getSpacing(91)};
    width: max-content;
    margin: ${getSpacing(4, 0)};
  }

  & > span {
    margin-bottom: ${getSpacing(6)};
  }
`;
