import React from "react";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";
import { NextSeo } from "next-seo";
import FirstConnectionSetPasswordContainer from "~containers/firstConnectionSetPassword";

const FirstConnectionSetPasswordPage: NextPage = () => (
  <>
    <NextSeo title="LabelVie - Première Connexion" />
    <FirstConnectionSetPasswordContainer />
  </>
);

FirstConnectionSetPasswordPage.layout = LayoutType.SideImage;

export default FirstConnectionSetPasswordPage;
