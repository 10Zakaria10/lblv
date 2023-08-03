import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledFidCardContainer = styled.div`
width: ${getSpacing(172)};
height: ${getSpacing(111)};
border-radius: ${getSpacing(8)};
background: linear-gradient(252.82deg, ${colorPalette.defaultBlue} 4.46%, ${colorPalette.vividCerulean} 59.35%);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: ${getSpacing(30, 0, 0, 10)};
position: relative;
overflow: hidden;
`

export const StyledCarrefourLogoContainer = styled.div`
right: -${getSpacing(33)};
top: ${getSpacing(7)};
position: absolute;
`

export const StyledFidCardLineOne = styled.div`
left: ${getSpacing(16.5)};
top: -${getSpacing(40.5)};
position: absolute;`

export const StyledFidCardLineTwo = styled.div`
left: -${getSpacing(23.5)};
top: -${getSpacing(31.5)};
position: absolute;`

export const StyledPointsTotal = styled.p`
margin: 0;
color: ${colorPalette.white};
font-weight: ${fontWeight.basic};
text-align: center;
& > span {
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.XXLarge};
}
`

export const StyledName = styled.p`
margin: 0;
color: ${colorPalette.lightBlueGrey};
font-weight: ${fontWeight.bold};
font-size: ${fontSize.medium};
`
export const StyledBarCodeContainer = styled.div`
    margin-top: ${getSpacing(8)};
`


