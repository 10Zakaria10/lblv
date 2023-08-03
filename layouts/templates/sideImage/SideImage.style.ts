import styled from "styled-components";
import { colorPalette, down, getSpacing, up } from "~styles/styleSheet";
import { HelpOutlineRounded } from "@mui/icons-material";

export const StyledSideImageContainer = styled.div`
  display: flex;
`;

export const StyledLeftSide = styled.div`
  background-image: url("/images/Slide-carrefour-marché-gourmant.svg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  flex: 5;
  ${down("laptop")} {
    flex: 4;
  }
  ${down("tablet")} {
    display: none;
  }
`;

export const StyledRightSide = styled.div`
  flex: 7;
  ${down("tablet")} {
    flex: 8;
  }
  ${down("mobile")} {
    flex: 1;
  }
`;

export const HeaderContainer = styled.div`
  display: block;
  padding: ${getSpacing(10)};
  ${down("mobile")} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${up("mobile")} {
    & > img {
      margin: ${getSpacing(15, 70, 0, 70)};
    }
  }
`;

export const HelpIcon = styled(HelpOutlineRounded)`
  color: ${colorPalette.darkBlue};
`;
