import {Map} from 'google-maps-react';
import styled from "@emotion/styled";
import { down, getSpacing } from '~styles/styleSheet';

export const StyledMap = styled(Map)`
    display:inline-block;
    width: ${getSpacing(326)} !important;
    height: 100% !important;
    border-top-left-radius: ${getSpacing(8)};
    overflow: hidden;
    ${down("tablet")} {
        border-top-left-radius: ${getSpacing(0)};
        width: ${getSpacing(195)} !important;
        height: 100% !important;
    }
    ${down("mobile")} {
        width:100%;
        height: 100% !important;
    }
`;
