import { useMutation } from "react-query";
import { queryClient } from "~utils/queryClient";
import { otpInfoQueryKey } from "./keys";
import { otpService } from "~containers/services/otpPhone";

function useOtpMutation() {
  const {
    mutateAsync,
    isLoading: loading,
    data,
    error,
  } = useMutation(otpService.validateOtp, { onSuccess: () => queryClient.invalidateQueries(otpInfoQueryKey()) });
  return { mutateAsync, loading, error, data };
}

export default useOtpMutation;
