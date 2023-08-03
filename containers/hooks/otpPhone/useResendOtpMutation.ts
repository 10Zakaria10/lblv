import { useMutation } from "react-query";
import { queryClient } from "~utils/queryClient";
import { otpInfoQueryKey } from "./keys";
import { otpService } from "~containers/services/otpPhone";

function useResendOtpMutation() {
  const {
    mutate,
    isLoading: loading,
    error,
  } = useMutation(otpService.resendOtp, {
    onSuccess: () => queryClient.invalidateQueries(otpInfoQueryKey()),
  });
  return { mutate, loading, error };
}

export default useResendOtpMutation;
