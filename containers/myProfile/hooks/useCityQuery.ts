
import {  useQuery } from "react-query";
import { updateClientService } from "../services";
import { ApiError } from "~types/apiError";
import { acitiesKey } from "./keys";
import { cityDto } from "../services/profile.service";

function  useCityQuery() {
    const {
      isLoading: loading,
      data: cities,
      error,
    } = useQuery<cityDto[], ApiError>( acitiesKey(),updateClientService.getCities);
  
    return { loading, error, cities };
  }

export default useCityQuery;