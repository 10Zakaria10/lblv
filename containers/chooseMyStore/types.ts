import { StoreTypeEnum } from "~types/storeTypes";
import { Client } from "~containers/fidSpace/types";

export interface storeDto{
    id: string;
    name: string;
    type: StoreTypeEnum;
    phoneNumber: string;
    longitude: number;
    latitude: number;
    address: string;
    city: City;
    regularHours: RegularHours[];
}
export interface City{
    id: string;
    name: string;
}
interface RegularHours{
    day: string;
    openingHour: string;
    closingHour: string;
}

export interface IGetStoresParams{
    type?: StoreTypeEnum;
    location?: String;
}
export interface IFavStoreParams{
    storeId: string
}
export interface IStoresByCity{
    city:string;
    stores?: storeDto[];
}
export const storeTypeToICategoryMapper = {
    [StoreTypeEnum.CARREFOUR_GOURMET]: "Carrefour Gourmet",
    [StoreTypeEnum.CARREFOUR] : "Carrefour",
    [StoreTypeEnum.CARREFOUR_MARKET] : "Carrefour Market",
    [StoreTypeEnum.CARREFOUR_EXPRESS] : "Carrefour Express",
}
export interface ICurrentClient extends Client {
    favoriteStore : storeDto;
}