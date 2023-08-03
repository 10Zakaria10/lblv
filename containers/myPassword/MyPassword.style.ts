import {
    colorPalette,
    down,
    fontSize,
    fontWeight,
    getSpacing,
    lineHeight,
} from "~styles/styleSheet";
  
import styled from "styled-components";
  
  export const MyPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(10)};
  padding: ${getSpacing(28, 16)};
  margin-bottom: ${getSpacing(40)};
  ${down("laptop")} {
    padding: ${getSpacing(28, 10)};
  }
`;
export const MyPasswordTitle = styled.div`
  font-size: ${fontSize.larger};
  color: ${colorPalette.darkGrey};
  font-weight: ${fontWeight.bolder};
`;
export const ListItem = styled.li`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  color: ${colorPalette.grey};
`;

export const SubTitle = styled.h4`
  margin: ${getSpacing(5, 0)};
  font-weight: normal;
  color: ${colorPalette.darkGrey};
  margin:unset;
`;

export const MyPasswordFormContainer = styled.div`
    padding: ${getSpacing(16,0)};
    display: flex;
    flex-direction: column;
    box-shadow: ${getSpacing(0,0,9)} rgba(0, 79, 159, 0.09);
    border-radius: ${getSpacing(4)};
    margin: auto;
`; 
export const PasswordRulesContainer = styled.div`
    margin: ${getSpacing(0,117)};
`; 
export const InputWrapper = styled.div`
    margin-top: ${getSpacing(12)};
    & button{
        width:100%;
        & div{
            font-weight: ${fontWeight.bold};
            font-size: ${fontSize.medium};
            line-height: 150%;
            justify-content: center;
        }
    }
`;
export const MyPasswordForm = styled.div`
    width: ${getSpacing(200)};
    margin: ${getSpacing(0)} auto;
`