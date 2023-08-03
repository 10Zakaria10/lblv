import { signUpService } from "../services";

import { useMutation } from "react-query";

function useClientMutation() {
  const { mutateAsync, isLoading: loading, data, error } = useMutation(signUpService.saveClient);
  return { mutateAsync, loading, error, data };
}

export default useClientMutation;
