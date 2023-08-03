import type { NextPage } from "~types/next";
import MyPassword from "~containers/myPassword"
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";

const MyPasswordPage: NextPage = () => {
  return (
     <>
      <NextSeo title="LabelVie - MyPassword" />
      <MyPassword />
    </>

  );
};
MyPasswordPage.layout = LayoutType.FidSpace;
MyPasswordPage.secure = true;

export default MyPasswordPage;
