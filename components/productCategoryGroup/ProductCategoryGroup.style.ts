import styled from "styled-components"
import { colorPalette, down, fontSize, fontWeight, getSpacing } from "~styles/styleSheet"

export const StyledCategoryGroupContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(10)};
`
export const StyledCategoryName = styled.p`
margin: 0;
padding: ${getSpacing(2)};
background-color: ${colorPalette.skyBlue};
width: ${getSpacing(550)};
height: ${getSpacing(15)};
box-shadow: inset ${getSpacing(0, 0, 500)} ${colorPalette.lightBlueGrey};
font-size: ${fontSize.medium};
font-weight: ${fontWeight.bold};
${down("laptop")}{
    width: ${getSpacing(350)};
}
${down("tablet")}{
    width: ${getSpacing(280)};
}
${down("mobile")}{
    width: ${getSpacing(160)};
}
`

export const StyledProductsContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(5)};
`
export const StyledProductDetailsContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(5)};
width: ${getSpacing(550)};
padding: ${getSpacing(4, 8)};
border-bottom: ${getSpacing(0.25)} solid ${colorPalette.concrete};
${down("laptop")}{
    width: ${getSpacing(350)};
}
${down("tablet")}{
    width: ${getSpacing(280)};
}
${down("mobile")}{
    width: ${getSpacing(160)};
}
`
export const StyledProductDetails = styled.div`
display: flex;
justify-content: space-between;
`
export const StyledProductName = styled.p`
margin: 0;
font-size: ${fontSize.medium};

& > span {
    font-weight: ${fontWeight.bold};
    color: ${colorPalette.defaultBlue};
    margin-right: ${getSpacing(2)};
}
`
export const StyledPrice = styled.p`
margin: 0;
font-size: ${fontSize.medium};
`