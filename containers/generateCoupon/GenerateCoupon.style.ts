import { Divider, Slider } from "@mui/material";
import styled from "styled-components";
import {
  colorPalette,
  down,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

export const IOSSlider = styled(Slider)(({}) => ({
  color: colorPalette.pictonBlue,
  "& .MuiSlider-thumb": {
    backgroundColor: colorPalette.pictonBlue,
  },
  "& .MuiSlider-valueLabel": {
    fontSize: fontSize.XSmall,
    fontWeight: fontWeight.bolder,
    whiteSpace: "break-spaces",
    textAlign: "center",
    transform: "translateY(100%) scale(1)",
    backgroundColor: "unset",
    "& .MuiSlider-valueLabelCircle": {
      background: "transparent",
      color: colorPalette.pictonBlue,
      marginTop: getSpacing(-2.25),
      "& .MuiSlider-valueLabelLabel": {
        marginInlineStart: getSpacing(1.25),
      },
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: colorPalette.alto,
  },
  "& .MuiSlider-mark": {
    backgroundColor: colorPalette.grey,
    height: getSpacing(4),
    width: getSpacing(1.5),
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
  "&.MuiSlider-marked": {
    "& .MuiSlider-markLabel": {
      color: colorPalette.grey,
      fontSize: fontSize.XSmall,
    },
  },
}));

export const StyledCouponGeneratorContainer = styled.div`
padding: ${getSpacing(28, 19, 30, 19)};
display: flex;
flex-direction: column;
align-items: flex-start;
gap: ${getSpacing(18)};
`

export const StyledCouponGeneratorContentContainer = styled.div`
margin:auto;
`

export const StyledCouponGeneratorContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: ${getSpacing(20)};
width: fit-content;
border: ${getSpacing(0.5)} solid ${colorPalette.doveGrey};
border-radius: ${getSpacing(8)};
padding: ${getSpacing(28, 98)};
${down("laptop")}{
    padding: ${getSpacing(18, 38)};
}

${down("tablet")}{
    padding: 0;
    border: none;
    gap: ${getSpacing(15)};
}
`
export const StyledSliderContainer = styled.div`
max-width: ${getSpacing(396)};
width: ${getSpacing(396)};
${down("laptop")}{
    max-width: ${getSpacing(302)};
}
${down("tablet")}{
    max-width: ${getSpacing(120)};
}
`
export const StyledSoldDesc = styled.p`
margin: 0;
text-align: center;
font-size: ${fontSize.larger};
font-weight: ${fontWeight.bold};
&>span {
  color: ${colorPalette.vividCerulean};
}
`
export const StyledDesc = styled.p`
margin: 0;
text-align: center;
`
export const StyledDivider = styled(Divider)(({})=>({
  width: getSpacing(120),
  margin: 0 , 
  "& .MuiDivider-wrapper": {
    fontWeight: fontWeight.bold
  },
}))

export const StyledBalanceContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${colorPalette.lightBlueGrey};
padding: ${getSpacing(15, 17, 11)};
gap: ${getSpacing(2)};
border-radius: ${getSpacing(2)};
max-width: ${getSpacing(396)};
width: ${getSpacing(396)};
${down("laptop")}{
    max-width: ${getSpacing(302)};
}
${down("tablet")}{
    max-width: ${getSpacing(120)};
}
`

export const StyledSolde = styled.p`
margin: 0;
color: ${colorPalette.defaultBlue};
font-size: ${fontSize.XXLarge};
font-weight: ${fontWeight.bold};
text-align: center;
& > span {
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.normal};
  text-align: center;
  vertical-align: middle;
}
${down("tablet")}{
    max-width: ${getSpacing(120)};
}
`

export const StyledRemainingBalance = styled.p`
margin: 0;
text-align: center;
max-width: ${getSpacing(136)};
font-size: ${fontSize.XSmall};
& > span {
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
}
${down("tablet")}{
    max-width: ${getSpacing(120)};
    & > span {
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.bold};
}
}
`

export const StyledSwapIconContainer = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
background-color: ${colorPalette.white};
border-radius: 50%;
width: ${getSpacing(16.5)};
height: ${getSpacing(16.5)};
top: 0;
margin-top: -${getSpacing(7)};
box-shadow: ${getSpacing(0, 0, 6)} ${colorPalette.grey};
`

export const StyledButtonContainer = styled.div`
margin: ${getSpacing(12, 5, 5, 0)};
display: flex;
justify-content: center;
& > button{
    width: ${getSpacing(173)};
    & > div {
        justify-content: center;
        }
}
${down("mobile")}{
  & > button{
    width: ${getSpacing(110)};
    & > div {
        justify-content: center;
        }
}
}
`

export const StyledCouponsDesc = styled.p`
margin: 0;
text-align: center;
font-size: ${fontSize.XSmall};
color: ${colorPalette.buttonGrey};
${down("tablet")}{
    max-width: ${getSpacing(120)};
}
`