import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { getClient } from "../services/chooseMyStore.service";
import { ICurrentClient } from "../types";

const useFavStoreQuery = () => {
    const getFavStore = () => getClient();
    const {
        isLoading: loading,
        data: currentClient,
        error,
    } = useQuery<ICurrentClient, ApiError>("getFavoriteStore",getFavStore);
    const favoriteStore = currentClient?.favoriteStore
    return { loading, error, favoriteStore };
}
export default useFavStoreQuery