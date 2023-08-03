import { useMutation } from "react-query";
import { firstConnectionService } from "../services";

function useSetPasswordMutation() {
  const {
    mutateAsync,
    isLoading: loading,
    data,
    error,
  } = useMutation(firstConnectionService.setPassword);
  return { mutateAsync, loading, error, data };
}

export default useSetPasswordMutation;
