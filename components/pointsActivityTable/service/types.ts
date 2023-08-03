export interface IPointsActivityData {
  type: PointsActivityEnum;
  activityDate: Date;
  points: number;
  balance: number;
}

export interface IPointActivity {
  name: string;
  iconPath: string;
}

export enum PointsActivityEnum {
  BURN_BY_POINTS = "BURN_BY_POINTS",
  EARN = "EARN",
  WELCOME = "WELCOME",
  PROFILE_COMPLETION = "PROFILE_COMPLETION",
  BURN_BY_COUPON = "BURN_BY_COUPON",
  COUPON_GENERATED = "COUPON_GENERATED",
  COUPON_CANCELLED = "COUPON_CANCELLED",
  COUPON_EXPIRED = "COUPON_EXPIRED",
}
