import styled from "styled-components";
import { colorPalette, down, fontSize, fontWeight, getSpacing, lineHeight } from "~styles/styleSheet";
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

export const StyledStoresList = styled.div`
  display: inline-flex;
  width: ${getSpacing(293)};
  flex-direction: column;
  ${down("tablet")} {
      width: 100%;
  }
  ${down("mobile")} {
      width:100%;
      flex-direction: column;
  }
  & + div{
    position: relative !important;
  } 
`
export const StyledSmsFailedOutlinedIcon = styled(SmsFailedOutlinedIcon)`
  margin: auto;
`;
export const Notice = styled.div`
  display:flex;
  padding: ${getSpacing(0, 16, 10, 16)};
  color: ${colorPalette.darkGrey};
  font-size: ${fontSize.small};
  line-height: ${lineHeight.medium};
  gap: ${getSpacing(9)};
  border-bottom: ${getSpacing(0.25)} solid ${colorPalette.borderGray};
`;
export const StoreListFooter = styled.div`
  width:100%;
  flex:0 1 ${getSpacing(44)};
  box-shadow:  ${getSpacing(0,10,20)} rgba(41, 48, 51, 0.3);
  display: flex;
  flex-direction:column;
  justify-content: center;
  z-index:100;
`
export const StoresListBody = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-y: hidden;
  min-height: ${getSpacing(116.5)};
  max-height: ${getSpacing(260)};
  :hover{
    overflow-y: overlay;
  }
  ${down("tablet")} {
    max-height: unset;
  }
`
export const NoStoresPlaceholder = styled.div`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
  line-height: 130%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${colorPalette.doveGrey};
  width: ${getSpacing(190)};
  margin:auto;
  & p{
    margin:${getSpacing(8,0,0,0)};
  }
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-right: ${getSpacing(12)};
`;
export const InfoCircleIcon = styled.img`
  height: ${getSpacing(46)};
`;