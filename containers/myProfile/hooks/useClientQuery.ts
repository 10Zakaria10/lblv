
import {  useQuery } from "react-query";
import { updateClientService } from "../services";
import { ApiError } from "~types/apiError";
import { profileComplectionScoreQueryKey } from "./keys";

function  useProfileCompletionPercentageQuery() {
    const {
      isLoading: loading,
      data: percentage,
      error,
    } = useQuery<number, ApiError>(profileComplectionScoreQueryKey(), updateClientService.getProfileCompeltionScore, {
      refetchInterval: 500,
    });
  
    return { loading, error, percentage };
  }

export default useProfileCompletionPercentageQuery;