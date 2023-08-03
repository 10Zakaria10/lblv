import { NextSeo } from "next-seo";
import SignUpOtp from "~containers/signUpOtp";
import { LayoutType } from "~layouts/config";
import { NextPage } from "~types/next";

const SignUpOtpPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - Authentification" />
      <SignUpOtp />
    </>
  );
};
SignUpOtpPage.layout = LayoutType.SideImage;

export default SignUpOtpPage;
