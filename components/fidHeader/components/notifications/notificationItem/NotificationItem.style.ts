import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing, lineHeight } from "~styles/styleSheet";

export const NotificationContainer = styled.div`
    display: flex;
    gap: ${getSpacing(8)};
    padding: ${getSpacing(13,15,8,15)};
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.XSmall};
    line-height: ${lineHeight.component};
    color: ${colorPalette.notificationBlueGrey};
    background-color: ${colorPalette.white};
    cursor: pointer;
`;
export const Time = styled.div`
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.XSmall};
    color: ${colorPalette.notificationGrey};
    margin-top:${getSpacing(3)};

`; 
export const NotificationIcon = styled.img`
    height: ${getSpacing(12)};
    width: ${getSpacing(12)};
`; 
