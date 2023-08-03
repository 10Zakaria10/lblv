import { FidSpaceService } from "../../services/fidSpace";
import type { Wallet } from "../../fidSpace/types";

import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { walletQueryKey } from "./keys";

function useWalletQuery() {
  const {
    isLoading: loading,
    data: wallet,
    error,
  } = useQuery<Wallet, ApiError>(walletQueryKey(), FidSpaceService.getWallet);

  return { loading, error, wallet };
}

export default useWalletQuery;
