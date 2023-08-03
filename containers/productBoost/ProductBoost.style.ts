import styled from "styled-components";
import { colorPalette, down, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledProductBoostContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(8)};
margin: ${getSpacing(38, 24, 30)};
`

export const StyledTitleBlockContainer = styled.div`
display: flex;
justify-content: space-between;
${down("tablet")}{
    flex-direction: column;
    gap: ${getSpacing(14)};
}
`


export const StyledFilterContainer = styled.div`
display: flex;
gap: ${getSpacing(15)};
align-items: center;
& > button {
    width: ${getSpacing(36.5)};
    height: ${getSpacing(18.5)};
}
& > div {
    display: flex;
    align-items: center;
    gap: ${getSpacing(7)};
}
${down("mobile")}{
    flex-direction: column;
    gap: ${getSpacing(14)};
    align-items: flex-start;
}
`
export const StyledLabel = styled.label`
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.medium};
    color: ${colorPalette.darkGrey};
`

export const StyledPaginationContainer = styled.div`
display: flex;
justify-content: center;
margin-top: ${getSpacing(28)};
`
