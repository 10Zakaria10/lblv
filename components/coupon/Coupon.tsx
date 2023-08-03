import Image from "next/image";
import type { FC } from "react";
import Barcode from "~components/barcode";
import { colorPalette } from "~styles/styleSheet";
import {
  StyledBarcodeContainer,
  StyledCercleCutLeft,
  StyledCercleCutRight,
  StyledCoupon,
  StyledCouponBalance,
  StyledCouponDate,
  StyledDivider,
} from "./Coupon.style";

interface ICoupon {
  currency: string;
  validityDateMsg: string;
  balance: number;
  date: string;
  couponCode: string;
  onClick: () => void;
}

const Coupon: FC<ICoupon> = ({
  couponCode,
  currency,
  balance,
  date,
  validityDateMsg,
  onClick,
}) => {
  return (
    <StyledCoupon onClick={onClick}>
      <StyledCercleCutLeft />
      <StyledCercleCutRight />
      <Image src={"/images/Carrefour-logo.svg"} width={61} height={40} />
      <StyledCouponBalance>{`${balance} ${currency}`}</StyledCouponBalance>
      <StyledCouponDate>{`${validityDateMsg} ${date}`}</StyledCouponDate>
      <StyledDivider />
      <StyledBarcodeContainer>
        <Barcode code={couponCode} color={colorPalette.alabaster} />
      </StyledBarcodeContainer>
    </StyledCoupon>
  );
};

export default Coupon;
