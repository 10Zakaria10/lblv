import React from "react";

import { SITE_CONFIG } from "~config/site";
import { GlobalStyles } from "~styles/globalCss";

import { StyledMainBlank } from "./Blank.style";

import { Global } from "@emotion/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

const BlankLayout: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <DefaultSeo
        canonical={SITE_CONFIG.siteUrl + (router.asPath || "")}
        defaultTitle={SITE_CONFIG.title}
        description={SITE_CONFIG.description}
        titleTemplate={`%s ${SITE_CONFIG.titleSeparator} ${SITE_CONFIG.title}`}
      />
      <Global styles={GlobalStyles} />
      <StyledMainBlank>{children}</StyledMainBlank>
    </>
  );
};

export default BlankLayout;
