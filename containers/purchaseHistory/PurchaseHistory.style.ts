import styled from "styled-components";
import { colorPalette, down, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const StyledBalanceHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(10)};
  padding: ${getSpacing(28, 24, 30, 23)};
`;

export const StyledTitleBlockContainer = styled.div`
display: flex;
justify-content: space-between;
${down("tablet")}{
    flex-direction: column;
    gap: ${getSpacing(14)};
}
`
export const StyledLabel = styled.label`
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.medium};
    color: ${colorPalette.darkGrey};
`
export const StyledSortContainer = styled.div`
display: flex;
gap: ${getSpacing(8)};
align-items: center;
${down("mobile")}{
    gap: ${getSpacing(4)};
}
`