import styled from "styled-components";
import { colorPalette, down, fontSize, fontWeight, getSpacing, ZIndex } from "~styles/styleSheet";

export const StyledCoupon = styled.div`
position: relative;
padding-top: ${getSpacing(13)};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: ${getSpacing(4)};
width: ${getSpacing(65)};
height: ${getSpacing(115)};
border-radius: ${getSpacing(5)};
background-color: ${colorPalette.alabaster};
box-shadow: ${getSpacing(0, 0, 2)} ${colorPalette.doveGrey};
${down("mobile")}{
    width: ${getSpacing(56)};
}
`

export const StyledCercleCutLeft = styled.div`
position: absolute;
left: -${getSpacing(3.5)};
bottom: ${getSpacing(15)};
width: ${getSpacing(8)};
height: ${getSpacing(7.5)};
border-radius: 50%;
background-color: ${colorPalette.white};
box-shadow: inset ${getSpacing(-0.9, 0, 0.8, -0.5)} ${colorPalette.doveGrey};
`
export const StyledCercleCutRight = styled.div`
position: absolute;
right: -${getSpacing(3.5)};
bottom: ${getSpacing(15)};
width: ${getSpacing(7)};
height: ${getSpacing(7.5)};
border-radius: 50%;
background-color: ${colorPalette.white};
box-shadow: inset ${getSpacing( 0.9, 0, 0.8, -0.5)} ${colorPalette.doveGrey};
`
export const StyledCouponBalance = styled.p`
margin: 0;
font-size: ${fontSize.larger};
font-weight: ${fontWeight.bold};
`

export const StyledCouponDate = styled.p`
margin: 0;
font-size: ${fontSize.XXSmall};
font-weight: ${fontWeight.basic};
color: ${colorPalette.grey};
text-align: center;
max-width: ${getSpacing(50)};
`

export const StyledDivider = styled.hr`
border-top: ${getSpacing(0.5)} dashed ${colorPalette.grey};
border-bottom: 0;
width: 80%;
height: 0;
`

export const StyledBarcodeContainer = styled.div`
margin-top: ${getSpacing(-7)};
`

