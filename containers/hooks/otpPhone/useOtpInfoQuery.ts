import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { otpService } from "~containers/services/otpPhone";
import { IOtpDto } from "~containers/services/otpPhone/types";
import { otpInfoQueryKey } from "./keys";

function useOtpInfoQuery(phoneNumber: string) {
  const {
    isLoading: loading,
    data: otpInfos,
    error,
  } = useQuery<IOtpDto, ApiError>(otpInfoQueryKey(), () =>
    otpService.getOtpInfo(phoneNumber),
  );

  return { otpInfos, loading, error };
}

export default useOtpInfoQuery;
