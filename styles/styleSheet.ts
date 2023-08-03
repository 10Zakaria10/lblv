import { down as _down, up as _up } from "styled-breakpoints";

const SPACING_UNIT = 2;
const MEASUREMENT_UNIT = "px";
export const colorPalette = {
  white: "#FFFFFF",
  darkBlue: "#0E3368",
  lightBlueGrey: "#E6F1FC",
  concrete: "#f2f2f2",
  blue: "#0970e6",
  red: "#EF473A",
  black: "#000000",
  lightRed: "#FDE6EE",
  grey: "#929292",
  doveGrey: "#737373",
  darkGrey: "#2e2e2e",
  borderGray: "#d0d0d5",
  lightGrey: "#F2F2F2",
  defaultBlue: "#004f9f",
  darkerBlue: "#23263B",
  buttonGrey: "#575757",
  vividCerulean: "#00A8E1",
  dustyGrey: "#999999",
  ebonyClay: "#273240",
  lightGreen: "#5CC689",
  skyBlue:"#8af0e7",
  pictonBlue: "#439FE3",
  alto: "#D9D9D9",
  notificationBlueGrey: "#1A1F36",
  notificationGrey: "#A5ACB8",
  alabaster:"#FAFAFA",
};

export const colorUsage = {
  inputLabel: colorPalette.darkBlue,
  errorMessage: colorPalette.red,
  basicText: colorPalette.black,
  defaultText: colorPalette.defaultBlue,
};

export const fontFamily = {
  main: "Poppins",
};

export const fontSize = {
  XXLarge: "32px",
  XLarge: "30px",
  larger: "24px",
  large: "22px",
  semiLarge: "18px",
  medium: "16px",
  small: "14px",
  XSmall: "12px",
  XXSmall: "10px",
};

export const ZIndex = {
  z_0: 0,
  z_10: 10,
  z_100: 100,
};

export const fontWeight = {
  extraBold: 800,
  bolder: 700,
  bold: 600,
  basic: 500,
  normal: 400,
  light: 300,
};

export const lineHeight = {
  XLarge: "39px",
  large: "32px",
  medium: "24px",
  component: "16px",
  small: "8px",
};

export const borderRadius = {
  small: "4px",
  medium: "8px",
  large: "16px",
  XLarge: "24px",
  XxLarge: "30px",
};

export const boxShadow = {
  level1: "0 4px 25px rgba(0, 0, 0, 0.05)",
  level2: "0px 0px 16px rgba(0, 0, 0, 0.06)",
};

export const { down, up } = (function breakpoints() {
  type resolutions = "laptop" | "mobile" | "tablet";
  const DOWNS: { [key in resolutions]: ReturnType<typeof _down> } = {
    mobile: _down("xs"),
    tablet: _down("sm"),
    laptop: _down("lg"),
  };
  const UPS: { [key in resolutions]: ReturnType<typeof _up> } = {
    mobile: _up("sm"),
    tablet: _up("md"),
    laptop: _up("xl"),
  };

  const downGetter = (bp: resolutions) => {
    return DOWNS[bp];
  };
  const upGetter = (bp: resolutions) => {
    return UPS[bp];
  };

  return {
    down: downGetter,
    up: upGetter,
  };
})();

export const getSpacing = (multiplier1: number, ...rest: number[]): string => {
  if (rest.length > 3) {
    throw new Error("A max of three parameters are allowed.");
  }

  let spacing = `${multiplier1 * SPACING_UNIT}${MEASUREMENT_UNIT}`;

  rest.forEach((multiplier) => {
    spacing = `${spacing} ${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;
  });

  return spacing;
};
