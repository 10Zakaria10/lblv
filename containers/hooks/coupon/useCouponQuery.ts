import { ApiError } from "next/dist/server/api-utils";
import { useQuery } from "react-query";
import { CouponService } from "~containers/services/coupon";
import { ICoupon } from "~containers/services/coupon/types";
import { couponQueryKey } from "./keys";


function useCouponQuery() {
  const getCoupons = () => CouponService.getLatestCoupons(3);
  const {
    isLoading: loading,
    data: coupons,
    error,
  } = useQuery<ICoupon[], ApiError>(couponQueryKey(), getCoupons);

  return { loading, error, coupons };
}

export default useCouponQuery;
