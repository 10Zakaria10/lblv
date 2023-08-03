import type { NextPage } from "~types/next";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import ProductDetails from "~containers/productDetails";
import { getIdFromQuery } from "~services/product-boost.service";

const ProductDetailsPage: NextPage = () => {
  const router = useRouter();
  const id = getIdFromQuery(router.query);

  return (
    <>
      <NextSeo title="LabelVie - ProductDetails" />
      <ProductDetails id={id} />
    </>
  );
};
ProductDetailsPage.layout = LayoutType.FidSpace;
ProductDetailsPage.secure = true;
export default ProductDetailsPage;
