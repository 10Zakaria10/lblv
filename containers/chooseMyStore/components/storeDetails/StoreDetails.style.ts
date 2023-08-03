import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing } from "~styles/styleSheet";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
export const StoreDetailsWrapper = styled.div`
    width: 100%;
    padding: ${getSpacing(12)};
    display: flex;
    flex-direction: column;
    border-top: ${getSpacing(0.25)} solid ${colorPalette.borderGray};
    border-bottom: ${getSpacing(0.25)} solid ${colorPalette.borderGray};
`;
export const StoreDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${getSpacing(4)};
`;
export const StoreTitle = styled.div`
    display: flex;
    gap:${getSpacing(4)};
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.medium};
    line-height: 150%;
`;
export const FavoriteStoreTag = styled.div`
    padding:  ${getSpacing(4,6)};
    background: ${colorPalette.lightBlueGrey};
    border-radius: ${getSpacing(4)};
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.XSmall};
    color:${colorPalette.defaultBlue};
    margin-right:auto;
    margin-left:${getSpacing(16)};
`;
export const StoreDistance = styled.div`
    padding-left: ${getSpacing(16)};
`;
export const StoreAddress = styled.div`
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.medium};
    line-height: 150%;
    padding-left: ${getSpacing(16)};
    color: ${colorPalette.doveGrey};
`;
export const StoreFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: ${getSpacing(16)};
`;
export const MarketIcon = styled.img`
    height:${getSpacing(8)};
    width: ${getSpacing(12)};
    margin:auto 0;
`
export const ExtraInfoButton = styled.div`
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.small};
    line-height: 150%;
    text-decoration-line:  underline;
    height: fit-content;
    margin: auto 0;
    color: ${colorPalette.defaultBlue};
    display:flex;
    gap: ${getSpacing(2)};
    :hover{
        cursor: pointer !important;;
    }
`
export const ExtraInfoIconDown = styled(KeyboardArrowDownRoundedIcon)`
    height:${getSpacing(10)};
    width: ${getSpacing(10)};
    margin:auto 0;
`;
export const ExtraInfoIconUp = styled(KeyboardArrowUpRoundedIcon)`
    height:${getSpacing(10)};
    width: ${getSpacing(10)};
    margin:auto 0;
`;
export const StoreExtraDetailsContainer = styled.div`
    margin-top: ${getSpacing(16)};
    padding-left: ${getSpacing(16)};
    display: flex;
    justify-content: space-between;
`;
export const WeeklySchedule = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${getSpacing(2)};
    width: fit-content;
`;
export const WeeklyScheduleItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.small};
    line-height: 150%;
    width:${getSpacing(70)};
    color: ${colorPalette.doveGrey};
`;
export const WeeklyScheduleItemActive = styled.div`
    display: flex;
    justify-content: space-between;
    width:${getSpacing(70)};
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.small};
    line-height: 150%;
    font-weight: ${fontWeight.bold}!important;
    color: ${colorPalette.lightGreen}!important;
`;
export const PhoneNumber = styled.div`
    display: flex;
    gap: ${getSpacing(4)};
    height: ${getSpacing(17)};
`;
export const PhoneIcon = styled(CallOutlinedIcon)`
    color: ${colorPalette.darkBlue};
    width: ${getSpacing(17)};
    height: ${getSpacing(17)};
    padding: ${getSpacing(5)};
    border-radius: ${getSpacing(17)};
    background-color: ${colorPalette.lightBlueGrey};
`;
export const PhoneNumberText = styled.div`
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.medium};
    line-height: 150%;
    color: ${colorPalette.darkerBlue};
    margin: auto 0;
`;
