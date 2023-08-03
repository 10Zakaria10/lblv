import type { NextPage } from "~types/next";
import GenerateCoupon from "~containers/generateCoupon";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";

const GenerateCouponPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - GenerateCoupon" />
      <GenerateCoupon />
    </>
  );
};
GenerateCouponPage.layout = LayoutType.FidSpace;

export default GenerateCouponPage;
