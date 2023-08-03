import { NextSeo } from "next-seo";
import FirstConnectionOtp from "~containers/PasswordChangeOtp";
import { LayoutType } from "~layouts/config";
import { NextPage } from "~types/next";
import routes from "~components/Routes/routes";

const FirstConnectionOtpPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - Première Connexion Otp" />
      <FirstConnectionOtp redirectionUrl={routes.FIRST_CONNECTION_SET_PASSWORD} />
    </>
  );
};
FirstConnectionOtpPage.layout = LayoutType.SideImage;

export default FirstConnectionOtpPage;
