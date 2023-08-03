import type { NextPage } from "~types/next";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const FidiliteCard = dynamic(() => import("~containers/fidiliteCard"));

const FidiliteCardPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - FidiliteCard" />
      <FidiliteCard />
    </>
  );
};
FidiliteCardPage.layout = LayoutType.FidSpace;
FidiliteCardPage.secure = true;

export default FidiliteCardPage;
