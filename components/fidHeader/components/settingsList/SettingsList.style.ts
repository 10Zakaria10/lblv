import Switch, { SwitchProps } from "@mui/material/Switch";
import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, getSpacing} from "~styles/styleSheet";

export const SettingsListWrapper = styled.div`
    background-color: ${colorPalette.white};
`;
export const SettingsItem = styled.div`
    background-color: ${colorPalette.white};
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.small};
    display: flex;
    color:${colorPalette.buttonGrey};
    padding: ${getSpacing(8)};
    align-items: center;
    gap: ${getSpacing(2)};
    & > svg{
        flex: 0 1 ${getSpacing(12)};
        margin-inline-end:unset;
    }
    & > div{
        flex: 1 1 auto;
    }
    &:hover{
        background-color: ${colorPalette.lightGrey};
    }
`;
export const IOSSwitch = styled(Switch)`
    width: ${getSpacing(21.5)};
    height: ${getSpacing(13)};
    padding: ${getSpacing(0)};
    & .MuiSwitch-switchBase {
      padding: ${getSpacing(0)};
      margin: ${getSpacing(1)};
      transition-duration: 300ms;
      &.Mui-checked {
        transform: translateX(${getSpacing(8)});
        color: #fff;
        & + .MuiSwitch-track {
          background-color: ${colorPalette.defaultBlue};
          opacity: 1;
        };
        &.Mui-disabled + .MuiSwitch-track {
          opacity: 0.5;
        };
      };
    };
    & .MuiSwitch-thumb {
      box-sizing: border-box;
      width: ${getSpacing(11)};
      height: ${getSpacing(11)};
    };
    & .MuiSwitch-track {
      border-radius: ${getSpacing(6.5)};
      background-color: ${colorPalette.lightBlueGrey};
      opacity: 1;
    };
`