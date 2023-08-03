import React from "react";

import { ReferenceContainer } from "~containers/reference/ReferenceContainer";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";

const Reference: NextPage = () => <ReferenceContainer />;

Reference.layout = LayoutType.SideImage;

export default Reference;
