import { colorPalette, fontFamily, getSpacing } from "./styleSheet";

import { css } from "@emotion/react";

export const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800;900&display=swap");

  * {
    font-family: ${fontFamily.main} !important;
    box-sizing: border-box !important;
    &::-webkit-scrollbar {
        width: ${getSpacing(7.5)};
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: ${colorPalette.defaultBlue};
        border: ${getSpacing(2)} solid transparent;
        background-clip: padding-box;
        border-radius: ${getSpacing(9)};
        &:hover{
            background: ${colorPalette.darkBlue};
            border: ${getSpacing(2)} solid transparent;
            background-clip: padding-box;
            border-radius: ${getSpacing(9)};
        }

    }
  }

  body {
    margin: 0;
  }

  .snackBarClassRoot {
    width: 100% !important;
    .MuiCollapse-root {
      width: 40% !important ;
    }
  }
`;
