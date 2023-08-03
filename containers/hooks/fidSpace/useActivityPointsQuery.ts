import { FidSpaceService } from "../../services/fidSpace";

import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { IPointsActivityData } from "~components/pointsActivityTable/service/types";
import { activityPointsKey } from "./keys";

function useActivityPointsQuery(size: number) {
  const getActivityPoints = ()=> FidSpaceService.getPointsActivityData(size)
  const {
    isLoading: loading,
    data: activityPoints,
    error,
  } = useQuery<IPointsActivityData[], ApiError>(activityPointsKey(size), getActivityPoints);

  return { loading, error, activityPoints };
}

export default useActivityPointsQuery;
