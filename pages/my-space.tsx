import type { NextPage } from "~types/next";
import FidSpace from "~containers/fidSpace";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";

const MySpacePage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - FidSpace" />
      <FidSpace />
    </>
  );
};
MySpacePage.layout = LayoutType.FidSpace;
MySpacePage.secure = true;

export default MySpacePage;
