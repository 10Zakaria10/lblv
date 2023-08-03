import apiClient from "~utils/apiClient";
import { GenrateCouponPayload, ICoupon } from "./types";


export const gererateCoupon = async (couponPalyload: GenrateCouponPayload): Promise<void> => {
  await apiClient.post<undefined, GenrateCouponPayload>("coupons", {
    data: couponPalyload,
  });
};

const getLatestCoupons = (size=3) => {
  const params = { size };
  return apiClient.get<ICoupon[]>("/coupons", { params });
};

export default {
gererateCoupon,
getLatestCoupons
}
