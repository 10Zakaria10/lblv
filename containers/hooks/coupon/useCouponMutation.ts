import { useMutation } from "react-query";
import { CouponService } from "~containers/services/coupon";

function useCouponMutation() {
  const { mutateAsync, isLoading: loading, data, error } = useMutation(CouponService.gererateCoupon);
  return { mutateAsync, loading, error, data };
}

export default useCouponMutation;
