import React from "react";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";
import { NextSeo } from "next-seo";
import ForgottenPasswordSetPasswordContainer from "~containers/forgottenPasswordSetPassword";

const ForgottenPasswordSetPasswordPage: NextPage = () => (
  <>
    <NextSeo title="LabelVie - Première Connexion" />
    <ForgottenPasswordSetPasswordContainer />
  </>
);

ForgottenPasswordSetPasswordPage.layout = LayoutType.SideImage;

export default ForgottenPasswordSetPasswordPage;
