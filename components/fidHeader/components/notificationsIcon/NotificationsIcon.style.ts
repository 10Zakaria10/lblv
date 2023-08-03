import styled from "styled-components";
import { colorPalette} from "~styles/styleSheet";

export const NotificationWrapper = styled.div`
    position: relative;
    display: inline-flex;
    & > svg{
        margin: auto;
    }
    &.open{      
      color:${colorPalette.defaultBlue};
    }
`;