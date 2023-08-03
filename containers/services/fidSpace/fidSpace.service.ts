import {
  IBalanceHistoryData,
} from "~components/balanceHistoryTable/service/types";
import {
  IPointsActivityData,
} from "~components/pointsActivityTable/service/types";
import apiClient from "~utils/apiClient";
import { Client, Wallet } from "../../fidSpace/types";
import { IProductBoostParams } from "~containers/services/product/types";

export const PRODUCTS_BOOST_PARAMS: IProductBoostParams = {
  page: 0,
  size: 5,
  sortType: "",
};

const getBalanceHistoryData = (size: number) => {
  const params = { size };
  return apiClient.get<IBalanceHistoryData[]>("/receipts", { params });
};

export const getPointsActivityData = (size: number) => {
  const params = { size };
  return apiClient.get<IPointsActivityData[]>("/balance-histories", { params });
};

export const getClient = () => {
  return apiClient.get<Client>("/clients/current");
};

export const getWallet = () => {
  return apiClient.get<Wallet>("/wallets/current");
};

export default {
  getClient,
  getWallet,
  getPointsActivityData,
  getBalanceHistoryData,
  PRODUCTS_BOOST_PARAMS
};
