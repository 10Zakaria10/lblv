import styled from "styled-components";
import { colorPalette, down, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledProductDetailsContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(8)};
padding: ${getSpacing(24, 28)};
${down("laptop")}{
    gap: ${getSpacing(4)};
}
`
export const StyledCategoryConatiner = styled.div`
display: flex;
gap: ${getSpacing(3)};
`
export const StyledBoostContainer = styled.p`
margin: 0;
color: ${colorPalette.defaultBlue};
font-weight: ${fontWeight.basic};
cursor: pointer;
`
export const StyledCategory = styled.p`
margin: 0;
font-weight: ${fontWeight.basic};
`
export const StyledDetailsContainer = styled.div`
position: relative;
display: flex;
align-items: center;
gap: ${getSpacing(80)};
border: ${getSpacing(0.5)} solid ${colorPalette.doveGrey};
border-radius: ${getSpacing(8)};
padding: ${getSpacing(39, 30, 22, 86)};
${down("laptop")}{
    gap: ${getSpacing(35)};
    padding: ${getSpacing(39, 25, 22, 44)};
}

${down("tablet")}{
  padding: ${getSpacing(13, 8.5, 7.5, 15)};
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
export const StyledDetailsImageContainer = styled.div`
position: relative;
display: block;
align-items: center;
justify-content: center;
width: ${getSpacing(139)};
height: ${getSpacing(134)};
${down("tablet")}{
  margin-top: ${getSpacing(25)};
  width: ${getSpacing(95)};
  height: ${getSpacing(92)};
}
`

export const StyledDetailsContent = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(8)};
margin: auto;
${down("tablet")}{
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
export const StyledDetailsContentContainer = styled.div`
`

export const StyledBonusContainer = styled.div`
background: ${colorPalette.vividCerulean};
width: ${getSpacing(36)};
height: ${getSpacing(36)};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 50%;
text-align: center;
color: ${colorPalette.white};
`;

export const StyledPointsTypographyBold = styled.span`
  display: block;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
`;

export const StyledPointsTypographySmall = styled.span`
  display: block;
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.XSmall};
  margin-top: -${getSpacing(2)};
`;

export const StyledProductName = styled.p`
margin: 0;
font-weight: ${fontWeight.bolder};
font-size: ${fontSize.XLarge};
${down("tablet")}{
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.larger};
}
`

export const StyledProductXSmallDesc = styled.p`
margin: 0;
font-size: ${fontSize.medium};
color: ${colorPalette.doveGrey};
max-width: ${getSpacing(190)};
`

export const StyledProductPrice = styled.p`
margin: 0;
color: ${colorPalette.darkBlue};
font-weight: ${fontWeight.bolder};
font-size: ${fontSize.XLarge};
${down("tablet")}{
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.larger};
}
`

export const StyledDetailsParagraph = styled.div`
display: flex;
gap: ${getSpacing(3.5)};
align-items: flex-start;
`

export const StyledParagraphImageContainer = styled.div`
display: block;
align-items: flex-start;
flex-basis: ${getSpacing(12)};
flex-shrink: 0;
`

export const StyleDescParagraph = styled.p`
margin: 0;
color: ${colorPalette.doveGrey};
font-size: ${fontSize.XSmall};
max-width: ${getSpacing(190)};
${down("tablet")}{
  margin-top: ${getSpacing(7.5)};
}
`

export const StyledShareButtonContainer = styled.div`
position: absolute;
top: ${getSpacing(16)};
right: ${getSpacing(16)};
width: ${getSpacing(12)};
height: ${getSpacing(12)};
`



