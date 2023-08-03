import { useMutation } from "react-query";
import { authService } from "../services";

function useLoginMutation() {
  const { mutateAsync, isLoading: loading, data, error } = useMutation(authService.login);
  return { mutateAsync, loading, error, data };
}

export default useLoginMutation;
