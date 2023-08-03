import { IBalanceHistoryWording } from "~containers/fidSpace/wording/types";

export interface IPurchaseHistorySortWording {
  date_asc:string;
  date_desc: string;
}

interface IPurchaseHistoryWording extends IBalanceHistoryWording{
  sort: IPurchaseHistorySortWording;
  sortLabel: string;
}


export default IPurchaseHistoryWording;
