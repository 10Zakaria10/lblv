import { down as _down, up as _up } from "~styles/styleSheet";

import { useBreakpoint } from "styled-breakpoints/react-styled";

export interface SupportedSizes {
  mobile: boolean;
  tablet: boolean;
  laptop: boolean;
}

export const useDeviceSize = () => {
  const down: SupportedSizes = {
    mobile: Boolean(useBreakpoint(_down("mobile"))),
    tablet: Boolean(useBreakpoint(_down("tablet"))),
    laptop: Boolean(useBreakpoint(_down("laptop"))),
  };

  const up: SupportedSizes = {
    mobile: Boolean(useBreakpoint(_up("mobile"))),
    tablet: Boolean(useBreakpoint(_up("tablet"))),
    laptop: Boolean(useBreakpoint(_up("tablet"))),
  };

  return {
    down,
    up,
  };
};
