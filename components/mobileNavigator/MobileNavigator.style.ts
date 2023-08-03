import styled from "styled-components"
import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet"


export const StyledMobileNavigator = styled.div`
width: 100%;
padding: ${getSpacing(9, 9, 0, 0)};
`
export const StyledCloseIconContainer = styled.div`
display: flex;
justify-content: flex-end;
& > svg {
    color: ${colorPalette.doveGrey};
}
`

export const StyledMobileNavigatorContent = styled.div`
padding: ${getSpacing(21, 32)};
`

export const StyledMobileNav = styled.nav`
display: flex;
flex-direction: column;
`

export const StyledMobileNavItem = styled.a`
  text-decoration: none;
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  color: ${colorPalette.darkGrey};
  margin-bottom: ${getSpacing(20)};
`;