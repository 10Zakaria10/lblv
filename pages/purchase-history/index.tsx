import type { NextPage } from "~types/next";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
const PurchaseHistory = dynamic(() => import("~containers/purchaseHistory"), {
  ssr: false,
});
const PurchaseHistoryPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - PurchaseHistory" />
      <PurchaseHistory />
    </>
  );
};
PurchaseHistoryPage.layout = LayoutType.FidSpace;
PurchaseHistoryPage.secure = true;

export default PurchaseHistoryPage;
