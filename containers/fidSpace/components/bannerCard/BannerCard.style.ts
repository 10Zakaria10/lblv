import styled from "styled-components";
import { colorPalette, down, getSpacing, up } from "~styles/styleSheet";


export const StyledBannerCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: max-content;
margin-inline-start: ${getSpacing(8)};
padding: ${getSpacing(14, 4, 10, 4)};
background-color: ${colorPalette.white}cc;
border-radius: ${getSpacing(8)};
box-shadow: ${getSpacing(0, 0, 8)} ${colorPalette.black}0f;
max-height: ${getSpacing(110)};

${down("laptop")}{
    margin-inline-start: ${getSpacing(4)};
    max-height: ${getSpacing(91)};
    width: max-content;
    margin: ${getSpacing(4, 0)}; 
}

& > span {
    margin-bottom: ${getSpacing(6)};
}
` 
