import type { NextPage } from "~types/next";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
const PointsActivity = dynamic(() => import("~containers/pointsActivity"), {
  ssr: false,
});

const PointsActivityPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - PointsActivity" />
      <PointsActivity />
    </>
  );
};
PointsActivityPage.layout = LayoutType.FidSpace;
PointsActivityPage.secure = true;
export default PointsActivityPage;
