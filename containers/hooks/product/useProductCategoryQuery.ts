import { FidSpaceService } from "../../services/fidSpace";

import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { Category, ProductPage } from "~containers/services/product/types";
import { productService } from "~containers/services/product";
import { categoryQueryKey, productQueryKey } from "./keys";
import { getProductCatgories } from "~containers/services/product/category.service";

function useProductCategoryQuery() {
  const {
    isLoading: loading,
    data: categories,
    error,
  } = useQuery<Category[], ApiError>(categoryQueryKey(), getProductCatgories);

  return { loading, error, categories };
}

export default useProductCategoryQuery;
