import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { ChooseMyStoreService } from "../services";
import { IGetStoresParams, storeDto } from "../types";

const useStoresQuery = (params?: IGetStoresParams) => {
  const getStores = () => ChooseMyStoreService.getStores(params);
  const {
    isLoading: loading,
    data: stores,
    error,
  } = useQuery<storeDto[], ApiError>(["getStores",params],getStores);
  return { loading, error, stores };
}
export default useStoresQuery