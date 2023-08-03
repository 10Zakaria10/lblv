import React from "react";

import ForgottenPasswordContainer from "~containers/forgottenPassword";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";
import { NextSeo } from "next-seo";

const ForgottenPasswordPage: NextPage = () => (
  <>
    <NextSeo title="LabelVie - Première Connexion" />
    <ForgottenPasswordContainer />
  </>
);

ForgottenPasswordPage.layout = LayoutType.SideImage;

export default ForgottenPasswordPage;
