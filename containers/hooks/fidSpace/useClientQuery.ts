import { FidSpaceService } from "../../services/fidSpace";
import type { Client } from "../../fidSpace/types";

import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { clientQueryKey } from "./keys";

function useClientQuery() {
  const {
    isLoading: loading,
    data: client,
    error,
  } = useQuery<Client, ApiError>(clientQueryKey(), FidSpaceService.getClient);

  return { loading, error, client };
}

export default useClientQuery;
