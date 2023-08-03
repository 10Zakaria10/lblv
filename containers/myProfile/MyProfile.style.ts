import {
  colorPalette,
  down,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from "~styles/styleSheet";

import styled from "styled-components";

export const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(10)};
  padding: ${getSpacing(28, 16)};
  margin-bottom: ${getSpacing(40)};
  ${down("laptop")} {
    padding: ${getSpacing(28, 10)};
  }
`;
export const MyProfileTitle = styled.div`
  font-size: ${fontSize.larger};
  line-height: ${lineHeight.large};
  color: ${colorPalette.darkGrey};
  font-weight: ${fontWeight.bolder};
`;
export const FormTitle = styled.div`
  font-size: ${fontSize.small};
  line-height: ${lineHeight.large};
  color: ${colorPalette.darkGrey};
  font-weight: ${fontWeight.bold};
  align-self: flex-start;
`;

export const FormCard= styled.div`
  padding: 0% 30%;  
  justify-content: center;
  ${down("laptop")} {
    padding: 0% 20%;  
  }

  ${down("mobile")} {
    padding: 0% 0%;  
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-inline-end: ${getSpacing(15)};
  margin-top: ${getSpacing(25)};
  flex-direction: column;
  align-self: center;
  
  ${down("laptop")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${getSpacing(5)};
  }

  ${down("mobile")} {
    align-items: center;
  }
`;
