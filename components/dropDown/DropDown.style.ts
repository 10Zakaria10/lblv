import { TextField } from "@mui/material";
import styled from "styled-components";
import { getSpacing } from "~styles/styleSheet";

export const StyledDropDownContainer =  styled.div`
display: flex;
gap: ${getSpacing(5)};
align-items: center;
`;

export const StyledDropDown = styled(TextField)`
width: ${getSpacing(118)};
`
