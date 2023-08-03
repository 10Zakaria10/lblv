import styled from "styled-components";
import { down, getSpacing } from "~styles/styleSheet";

export const StyledFidSpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(10)};
  padding: ${getSpacing(28, 16)};

  ${down("laptop")} {
    padding: ${getSpacing(28, 10)};
  }
`;

export const StyledFidSpaceContent = styled.div`
  margin-top: ${getSpacing(28)};
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(36)};
`;
