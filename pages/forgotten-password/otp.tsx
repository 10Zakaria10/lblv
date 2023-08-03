import { NextSeo } from "next-seo";
import ForgottenPasswordOtp from "~containers/PasswordChangeOtp";
import { LayoutType } from "~layouts/config";
import { NextPage } from "~types/next";
import routes from "~components/Routes/routes";

const ForgottenPasswordOtpPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - Première Connexion Otp" />
      <ForgottenPasswordOtp redirectionUrl={routes.FORGOTTEN_PASSWORD_SET_PASSWORD} />
    </>
  );
};
ForgottenPasswordOtpPage.layout = LayoutType.SideImage;

export default ForgottenPasswordOtpPage;
