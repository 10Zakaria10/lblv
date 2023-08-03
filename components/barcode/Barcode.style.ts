import styled from "styled-components";
import { getSpacing } from "~styles/styleSheet";

export const StyledBarcodeContainer = styled.div`
display: flex;
height: ${getSpacing(25)};
bottom: ${getSpacing(23)};
&  rect:first-of-type {
    fill-opacity: 0.9;
    rx: 5;
}
`
