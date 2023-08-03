import React from "react";

import FirstConnectionContainer from "~containers/firstConnection";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";
import { NextSeo } from "next-seo";

const FirstConnectionPage: NextPage = () => (
  <>
    <NextSeo title="LabelVie - Première Connexion" />
    <FirstConnectionContainer />
  </>
);

FirstConnectionPage.layout = LayoutType.SideImage;

export default FirstConnectionPage;
