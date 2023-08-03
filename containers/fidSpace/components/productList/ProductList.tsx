import type { FC } from "react";
import ProductRow from "~components/productRow";
import routes from "~components/Routes/routes";
import TitleBloc from "~components/titleBloc";
import { IProductListWording } from "~containers/fidSpace/wording/types";
import { ProductDto } from "~containers/services/product/types";

interface IProductList {
  products: ProductDto[];
  wording: IProductListWording;
}

const ProductList: FC<IProductList> = ({ products, wording }) => {
  return (
    <div>
      <TitleBloc
        title={wording.blocTitle}
        description={wording.blocDescription}
        linkText={wording.blocShowAll}
        linkAddress={routes.PRODUCT_BOOST}
      />
      <ProductRow products={products} wording={wording} />
    </div>
  );
};

export default ProductList;
