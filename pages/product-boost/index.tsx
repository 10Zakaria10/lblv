import type { NextPage } from "~types/next";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
const ProductBoost = dynamic(() => import("~containers/productBoost"));

const ProductBoostPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - ProductBoost" />
      <ProductBoost />
    </>
  );
};
ProductBoostPage.layout = LayoutType.FidSpace;
ProductBoostPage.secure = true;
export default ProductBoostPage;
