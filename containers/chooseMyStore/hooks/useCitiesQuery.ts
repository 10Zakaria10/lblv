import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { getCities } from "../services/chooseMyStore.service";
import { City } from "../types";

const useCitiesQuery = () => {
    const {
        isLoading: loading,
        data: cities,
        error,
    } = useQuery<City[], ApiError>("getCities",getCities);
    return { loading, error, cities };
}
export default useCitiesQuery