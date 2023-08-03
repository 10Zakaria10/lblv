import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export enum LayoutType {
  Blank = "blank",
  SideImage = "sideImage",
  FidSpace = "fidSpace",
}

export const layouts: Record<LayoutType, ComponentType> = {
  [LayoutType.Blank]: dynamic(async () => import("~layouts/templates/blank")),
  [LayoutType.SideImage]: dynamic(async () => import("~layouts/templates/sideImage")),
  [LayoutType.FidSpace]: dynamic(async () => import("~layouts/templates/fidSpace")),
} as const;
