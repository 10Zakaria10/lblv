import styled from "styled-components";
import { colorPalette, down, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledFilterHeader = styled.div`
display: flex;
justify-content: end;
cursor: pointer;
& > p {
    color: ${colorPalette.defaultBlue};
    font-weight: ${fontWeight.bold};
    text-decoration: underline;
    font-size: ${fontSize.medium};
}
`

export const StyledPopupFilterContainer = styled.div`
padding: ${getSpacing(0, 60.5)};
width: ${getSpacing(472)};
height: ${getSpacing(350)};
margin-top: ${getSpacing(-10)};
${down("laptop")}{
    padding: ${getSpacing(0, 8, 0, 22)};
    margin: auto;
    width: ${getSpacing(370)};
}

${down("tablet")}{
    padding: ${getSpacing(0, 8, 0, 12)};
    width: ${getSpacing(250)};
}

${down("mobile")}{
    padding: ${getSpacing(0, 2, 0, 10)};
    margin-inline: auto;
    width: ${getSpacing(130)};
}
`

export const StyledFilterBodyContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(12)};
`

export const StyledFilterSectionHeader = styled.p`
color: ${colorPalette.darkBlue};
font-weight: ${fontWeight.bold};
font-size: ${fontSize.medium};
`
export const StyledSectionBody = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const StyledFilterSection = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
${down("laptop")}{
    max-width: ${getSpacing(320)};
}
${down("tablet")}{
    max-width: ${getSpacing(230)};
}
${down("mobile")}{
    max-width: ${getSpacing(105)};
}

`

export const StyledCategoryContainer = styled.div`
display: grid;
gap:${getSpacing(8, 7)};
grid-template-columns: repeat( 3, 1fr );
${down("tablet")}{
    grid-template-columns: repeat( 2, 1fr );
}

${down("mobile")}{
    grid-template-columns: repeat( 1, 1fr );
}
`

export const StyledButtonContainer = styled.div`
margin: ${getSpacing(12, 5, 30, 0)};
display: flex;
justify-content: center;
& > button{
    width: ${getSpacing(173)};
    & > div {
        justify-content: center;
        }
}
${down("mobile")}{
    margin-bottom: ${getSpacing(25)};
    padding-right: ${getSpacing(8)};
}
`
export const StyledCategory = styled.div`
min-height: ${getSpacing(18)};
height: fit-content;
width: ${getSpacing(107.5)};
background-color: ${colorPalette.lightGrey};
padding: ${getSpacing(3, 6)};
text-align: center;
color: ${colorPalette.black};
border-radius: ${getSpacing(12.5)};
font-weight: ${fontWeight.normal};
cursor: pointer;
&.selected {
  background-color: ${colorPalette.lightGreen};  
  color: ${colorPalette.white};
}
`

