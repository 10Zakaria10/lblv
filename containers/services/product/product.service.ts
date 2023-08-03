import apiClient from "~utils/apiClient";
import { SupportedSizes } from "~utils/useDeviceSize";
import { DEFAULT_SORT_TYPE, NUMBER_OF_ROWS } from "./constants";
import { Category, IProductBoostFilter, IProductBoostParams, ProductDto, ProductPage } from "./types";
import qs from "query-string";

export const getSortType = (sortType: string) =>
  sortType === DEFAULT_SORT_TYPE ? "" : sortType;

export const getProducts = (params: IProductBoostParams) => {
  return apiClient.get<ProductPage>(`/products`, {
    params,
    paramsSerializer: params => {
      return qs.stringify(params);
    },
  });
};
export const getSelectedCategories = (
  selectedCatgories: number[],
  categories: Category[],
): string[] => selectedCatgories.map((index) => categories[index].label);

export const getProductsFilterParams = (
  categoriesFilter: string[],
  productPriceValue: number[],
  productBoostValue: number[],
): IProductBoostFilter => {
  return {
    minPrice: productPriceValue[0],
    maxPrice: productPriceValue[1],
    minPoints: productBoostValue[0],
    maxPoints: productBoostValue[1],
    categories: categoriesFilter,
  };
};


export const getProductDetails = (id: string) => {
  return apiClient.get<ProductDto>(`/products/${id}`);
}

export const getProductsToDisplay = (down: SupportedSizes, products: ProductDto[] | undefined) => {

  if (products === undefined) return [];
  const size = getNumberOfProductPerRow(down);
  return products.slice(0, size);
};

export const getProductRows = (products: ProductDto[], down: SupportedSizes) => {
    const rows = []
    const rowSize = getNumberOfProductPerRow(down);
    for(let i=0; i < NUMBER_OF_ROWS; i+=1){
        rows.push(products.slice(i*rowSize, (i + 1)*rowSize))
    }
    return rows
}

export const getNumberOfProductPerRow = (down: SupportedSizes): number => {
  let size = 5;
  if (down.laptop) {
    size = 4;
  }
  if (down.tablet) {
    size = 3;
  }
  if (down.mobile) {
    size = 1;
  }
  return size;
};

export const getSizeToFetch = (down: SupportedSizes) : number => {

  return NUMBER_OF_ROWS * getNumberOfProductPerRow(down);
}

export const getProductValidityDateToDisplay = (validity: string | undefined) => {
    if (validity === undefined) return "";
    const validityDate = new Date(validity);
    const day = validityDate.getDate();
    const month = validityDate.getMonth() + 1;
    return `${day}/${month > 9 ? month : "0"+month}`;
  };

export const getProductBoostParams = (page: number, size: number, sortType?: string):IProductBoostParams =>({page, sortType, size})
export default {
getProducts,
getProductsToDisplay,
getProductRows,
getProductDetails,
getProductValidityDateToDisplay
}
