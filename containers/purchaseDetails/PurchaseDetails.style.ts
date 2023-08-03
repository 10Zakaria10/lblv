import styled from "styled-components";
import { colorPalette, down, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledPurchaseDetailsContainer = styled.div`
padding: ${getSpacing(28, 24)};
display: flex;
flex-direction: column;
justify-content: center;
gap:${getSpacing(20)};
margin: auto;
`

export const StyledTicketInfoContainer = styled.div`
display: flex;
flex-direction: column;
gap:${getSpacing(5)};
`

export const StyledStoreName = styled.div`
font-size: ${fontSize.medium};
font-weight: ${fontWeight.bold};
color: ${colorPalette.defaultBlue};
`

export const StyledTicketNumber = styled.div`
font-size: ${fontSize.medium};
font-weight: ${fontWeight.bold};
& > span {
   font-size: ${fontSize.medium};
   font-weight: ${fontWeight.normal}; 
}
`

export const StyledTicketDate = styled.div`
color: ${colorPalette.grey};
`

export const StyledTicketDetailsContainer = styled.div`
margin-top: -${getSpacing(5)};
display: flex;
flex-direction: column;
gap: ${getSpacing(15.5)};
`

export const StyledPaymentDetailsContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(5)};
padding: ${getSpacing(8, 8)};
border-top: ${getSpacing(0.25)} solid ${colorPalette.alto};
border-bottom: ${getSpacing(0.25)} solid ${colorPalette.alto};
`

export const StyledPaymentDetails = styled.div`
display: flex;
justify-content: space-between;
& > span {
   font-weight: ${fontWeight.bold};
    color: ${colorPalette.defaultBlue}; 
}
`

export const StyledPaymentOperation = styled.p`
margin: 0;
font-size: ${fontSize.medium};
& > span {
    font-weight: ${fontWeight.bold};
}

${down("tablet")}{
    max-width: ${getSpacing(65)};
}
`
export const StyledPaymentContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(5)};
width: ${getSpacing(550)};
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
export const StyledPaymentMethodeContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(5)};
padding: ${getSpacing(4, 8)};
`



