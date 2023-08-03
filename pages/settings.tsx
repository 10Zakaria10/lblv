import Settings from "~containers/settings";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const SettingsPage: NextPage = () => {
  return (
    <>
      <NextSeo title="LabelVie - Settings" />
      <Settings />
    </>
  );
};
SettingsPage.layout = LayoutType.FidSpace;
SettingsPage.secure = true;

export default SettingsPage;
