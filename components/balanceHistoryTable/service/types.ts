export interface IBalanceHistoryData {
  id: string;
  store: IStore;
  createdAt: Date;
  totalAmountTTC: number;
  balance: number;
}

export enum StoreTypeEnum {
  CARREFOUR_GOURMET = "CARREFOUR_GOURMET",
  CARREFOUR = "CARREFOUR",
  CARREFOUR_MARKET = "CARREFOUR_MARKET",
  CARREFOUR_EXPRESS = "CARREFOUR_EXPRESS",
}

export interface IStore {
  name: string;
  type: StoreTypeEnum;
}
