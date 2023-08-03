import React from "react";

import SignInContainer from "~containers/signin";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";
import { NextSeo } from "next-seo";

const SignInPage: NextPage = () => (
  <>
    <NextSeo title="LabelVie - Authentification" />
    <SignInContainer />
  </>
);

SignInPage.layout = LayoutType.SideImage;

export default SignInPage;
