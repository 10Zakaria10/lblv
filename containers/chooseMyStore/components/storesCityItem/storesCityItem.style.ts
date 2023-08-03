import styled from "styled-components";
import { colorPalette, fontSize, getSpacing} from "~styles/styleSheet";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export const StoreCityItemWrapper = styled.div`
  display: flex;
  padding: ${getSpacing(8,16)};
  background-color: ${colorPalette.lightBlueGrey};
  border-top: ${getSpacing(0.25)} solid ${colorPalette.borderGray};
  border-bottom: ${getSpacing(0.25)} solid ${colorPalette.borderGray};
  :hover{
    cursor: pointer;
  }
`;
export const StoreCityItemDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:${getSpacing(2)};
  flex: 1 1 auto;
`;
export const StoreCityItemTitle = styled.div`
  font-weight: 600;
  font-size: ${fontSize.medium};
  line-height: 150%;
  color: ${colorPalette.darkGrey};
`;
export const StoreCityItemStores = styled.div`
  font-weight: 400;
  font-size: ${fontSize.small};
  line-height: 150%;
  color: ${colorPalette.doveGrey};
`;
export const StyledArrowForwardIosRoundedIcon = styled(ArrowForwardIosRoundedIcon)`
  margin: auto;
  color: ${colorPalette.darkGrey};
`
export const StyledArrowDownIosRoundedIcon = styled(ArrowForwardIosRoundedIcon)`
  margin: auto;
  color: ${colorPalette.darkGrey};
  transform: rotate(90deg);
`