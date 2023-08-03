import { useMutation } from "react-query";
import { forgottenPasswordService } from "../services";

function useSetPasswordMutation() {
  const {
    mutateAsync,
    isLoading: loading,
    data,
    error,
  } = useMutation(forgottenPasswordService.setPassword);
  return { mutateAsync, loading, error, data };
}

export default useSetPasswordMutation;
