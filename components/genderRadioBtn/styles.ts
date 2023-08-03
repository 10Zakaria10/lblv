import { colorUsage, fontSize, fontWeight, lineHeight } from "~styles/styleSheet";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import styled from "styled-components";

export const StyledFormLabel = styled(FormLabel)`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.normal};
  color: ${colorUsage.inputLabel};
  line-height: ${lineHeight.medium};
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.normal};
  color: ${colorUsage.inputLabel};
  line-height: ${lineHeight.medium};
`;
