import { useMutation } from "react-query";
import { firstConnectionService } from "../services";

function useValidatePhoneMutation() {
  const {
    mutateAsync,
    isLoading: loading,
    data,
    error,
  } = useMutation(firstConnectionService.validatePhone);
  return { mutateAsync, loading, error, data };
}

export default useValidatePhoneMutation;
