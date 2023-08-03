import { string } from "yup";

export interface GenrateCouponPayload {
    points: number;
}

export interface ICoupon {
    id: string;
    amount: number;
    expiredAt: string;
    ean: string;
}