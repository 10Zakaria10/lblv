
import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";
import { ProductDto } from "~containers/services/product/types";
import { productService } from "~containers/services/product";
import { productDetailsQueryKey } from "./keys";

function useProductDetailsQuery(id:string|undefined) {
  if(id === undefined) return { product : undefined}
  const getProducts = () => productService.getProductDetails(id)
  const {
    isLoading: loading,
    data: product,
    error,
  } = useQuery<ProductDto, ApiError>(productDetailsQueryKey(id), getProducts);

  return { loading, error, product };
}

export default useProductDetailsQuery;
