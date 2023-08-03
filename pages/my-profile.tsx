import type { NextPage } from "~types/next";
import MyProfile from "~containers/myProfile"
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";

const MyProfilePage: NextPage = () => {
  return (
     <>
      <NextSeo title="LabelVie - MyProfile" />
      <MyProfile />
    </>

  );
};
MyProfilePage.layout = LayoutType.FidSpace;
MyProfilePage.secure = true;


export default MyProfilePage;
