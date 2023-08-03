import { useMutation } from "react-query";
import { myPasswordService } from "../services";

function useUpdatePasswordMutation() {
  const {
    mutateAsync,
    isLoading: loading,
    data,
    error,
  } = useMutation(myPasswordService.updatePassword);
  return { mutateAsync, loading, error, data };
}

export default useUpdatePasswordMutation;
