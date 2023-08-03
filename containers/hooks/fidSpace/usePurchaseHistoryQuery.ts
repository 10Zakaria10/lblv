import { FidSpaceService } from "../../services/fidSpace";

import { useQuery } from "react-query";
import type { ApiError } from "~types/apiError";
import { purchaseHistoryKey } from "./keys";
import type { IBalanceHistoryData } from "~components/balanceHistoryTable/service/types";

function usePurchaseHistoryQuery(size: number) {
  const getPurchaseHistory = () =>
    FidSpaceService.getBalanceHistoryData(size);
  const {
    isLoading: loading,
    data: purchaseHistory,
    error,
  } = useQuery<IBalanceHistoryData[], ApiError>(
    purchaseHistoryKey(size),
    getPurchaseHistory,
  );    
  return { loading, error, purchaseHistory };
}

export default usePurchaseHistoryQuery;
