import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { ReceiptService } from "~containers/services/receipt";
import { IReceipt } from "~containers/services/receipt/types";
import { receiptQueryKey } from "./keys";

function useReceiptQuery(id: string | undefined) {
  if(id === undefined) return { receipt : undefined}
  const getReceipt = () => ReceiptService.getReceiptById(id);
  const {
    isLoading: loading,
    data: receipt,
    error,
  } = useQuery<IReceipt, ApiError>(receiptQueryKey(id), getReceipt);

  return { loading, error, receipt };
}

export default useReceiptQuery;
