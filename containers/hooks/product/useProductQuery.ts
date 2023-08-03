import { FidSpaceService } from "../../services/fidSpace";

import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { IProductBoostParams, ProductPage } from "~containers/services/product/types";
import { productService } from "~containers/services/product";
import { productQueryKey } from "./keys";
import { DEFAULT_SORT_TYPE } from "~containers/services/product/constants";

function useProductQuery(params: IProductBoostParams) {

  const getProducts = () => productService.getProducts(params);
  const {
    isLoading: loading,
    data: productPage,
    error,
  } = useQuery<ProductPage, ApiError>(productQueryKey(params), getProducts);

  return { loading, error, productPage };
}

export default useProductQuery;
