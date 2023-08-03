
import { useMutation, useQuery } from "react-query";
import { updateClientService } from "../services";

function useClientMutation() {
  const { mutateAsync, isLoading: loading, data, error } = useMutation(updateClientService.updateClient);
  return { mutateAsync, loading, error, data };
}

export default useClientMutation;
