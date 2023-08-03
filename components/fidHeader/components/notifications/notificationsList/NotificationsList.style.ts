import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

export const NotificationsListContainer =  styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    gap: ${getSpacing(0.5)};
    border-radius:  ${getSpacing(4.5)};
    overflow: hidden;
    max-height: 85vh;
    &:hover{
        overflow:overlay;
    }
`;
export const NoNewNotificationsContainer = styled.div`
    height: ${getSpacing(150)};
    background-color: ${colorPalette.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    color:${colorPalette.notificationGrey};
    & > svg {
        height: ${getSpacing(50)};
        width: ${getSpacing(50)};
        margin-inline-end: unset;
    }
    & > h1{
        padding: ${getSpacing(0, 25)};
        font-size: ${fontSize.semiLarge};
        font-weight: ${fontWeight.bolder};
    }
`;