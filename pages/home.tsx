import type { NextPage } from "~types/next";
import Home from "~containers/home";
import { LayoutType } from "~layouts/config";
import { NextSeo } from "next-seo";

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - Home" />
      <Home />
    </>
  );
};
HomePage.layout = LayoutType.SideImage;

export default HomePage;
