import { StoreTypeEnum } from "./types";

export const getStoreIconPath = (storeType: StoreTypeEnum): string => {
  switch (storeType) {
    case StoreTypeEnum.CARREFOUR:
      return "/images/Carrefour-logo.svg";
    case StoreTypeEnum.CARREFOUR_EXPRESS:
      return "/images/Carrefour-Express-logo.svg";
    case StoreTypeEnum.CARREFOUR_GOURMET:
      return "/images/Carrefour-Gourmet-logo.svg";
    case StoreTypeEnum.CARREFOUR_MARKET:
      return "/images/Carrefour-Market-logo.svg";
    default:
      return "/images/Carrefour-logo.svg";
  }
};
