import React from "react";

import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";

import SignUpContainer from "containers/signup";
import { NextSeo } from "next-seo";

const SignUpPage: NextPage = () => (
  <>
    <NextSeo title="LabelVie - Inscription" />
    <SignUpContainer />
  </>
);

SignUpPage.layout = LayoutType.SideImage;

export default SignUpPage;
