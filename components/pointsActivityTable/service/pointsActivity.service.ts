import { IPointsActivityWording } from "~containers/fidSpace/wording/types";
import { IPointActivity, PointsActivityEnum } from "./types";

export const getActivityNameAndIconPath = (storeType: PointsActivityEnum,  wording: IPointsActivityWording): IPointActivity => {
  switch (storeType) {
    case PointsActivityEnum.COUPON_GENERATED:
      return {
              name: wording.generateCoupon,
              iconPath: "/images/generate-coupon.svg"
            };
    case PointsActivityEnum.WELCOME:
      return {
        name: wording.welcome,
        iconPath: "/images/welcome.svg"
      };
    case PointsActivityEnum.EARN:
      return {
        name: wording.earnPoints,
        iconPath: "/images/earn-points.svg"
      };
    case PointsActivityEnum.PROFILE_COMPLETION:
      return {
        name: wording.completeProfile,
        iconPath: "/images/profile.svg"
      };
    default:
      return {
        name: wording.generateCoupon,
        iconPath: "/images/generate-coupon.svg"
      };
  }
};

export const getValueToDisplay = (points: number, activityType: PointsActivityEnum): number => {
  switch (activityType) {
    case PointsActivityEnum.COUPON_GENERATED:
      return -1 * points;
    case PointsActivityEnum.WELCOME:
      return points;
    case PointsActivityEnum.EARN:
      return points;
    case PointsActivityEnum.PROFILE_COMPLETION:
      return -1 * points;
    default:
      return points;
  }
};
