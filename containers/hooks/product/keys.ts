import { IProductBoostParams } from "~containers/services/product/types";

const PRODUCTS = "products";
const CATEGORIES = "categories";

export const productQueryKey = (params: IProductBoostParams) => {
  return [PRODUCTS, params];
};

export const categoryQueryKey = () => {
  return [CATEGORIES];
}

export const  productDetailsQueryKey = (id:string) => {
  return [PRODUCTS, id];
}
