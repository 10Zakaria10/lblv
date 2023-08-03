import styled from "styled-components";
import { colorPalette, down, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledFidiliteCardContainer = styled.div`
padding: ${getSpacing(28, 24)};
display: flex;
flex-direction: column;
align-items: flex-start;
gap: ${getSpacing(12)};
${down("tablet")}{
    padding: ${getSpacing(14, 11)};

}
`

export const StyledFidiliteContentContainer = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:${getSpacing(12)};
padding: ${getSpacing(24, 0)};
box-shadow: ${getSpacing(0, 0, 8)} ${colorPalette.defaultBlue}17;
${down("tablet")}{
    gap:${getSpacing(8)};
    width: 100%;
    box-shadow: ${getSpacing(0, 0, 0)};

}
`

export const StyledCouponsContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${getSpacing(7)};
`

export const StyledCouponsTitle = styled.p`
margin: 0;
font-weight: ${fontWeight.basic};
font-size: ${fontSize.semiLarge};
`

export const StyledCouponsContent = styled.div`
display: flex;
gap: ${getSpacing(10)};
${down("mobile")}{
    gap: ${getSpacing(8)};
}
`



export const StyledPopupCardContainer = styled.div`
padding: ${getSpacing(15, 45, 35)};
${down("mobile")}{
    width: ${getSpacing(172)};
    padding: ${getSpacing(3, 1, 15)};
    & > div {
        width: ${getSpacing(161)};
        height: ${getSpacing(110)};
    }
} 
`
export const StyledPopupCouponContainer = styled.div`
padding: ${getSpacing(15, 45, 35)};
${down("mobile")}{
    padding: ${getSpacing(15, 12, 15)};
    & > div {
        width: ${getSpacing(70)};
        height: ${getSpacing(115)};
    }
} 
`

