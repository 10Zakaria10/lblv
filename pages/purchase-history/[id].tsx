import type { NextPage } from "~types/next";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { getIdFromQuery } from "~services/product-boost.service";
import dynamic from "next/dynamic";
const PurchaseDetails = dynamic(() => import("~containers/purchaseDetails"), {
  ssr: false,
});
const PurchaseDetailsPage: NextPage = () => {
  const router = useRouter();
  const id = getIdFromQuery(router.query);
  return (
    <>
      <NextSeo title="LabelVie - PurchaseDetails" />
      <PurchaseDetails id={id} />
    </>
  );
};
PurchaseDetailsPage.layout = LayoutType.FidSpace;
PurchaseDetailsPage.secure = true;

export default PurchaseDetailsPage;
