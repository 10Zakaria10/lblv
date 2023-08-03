import type { FC } from "react";
import Product from "~components/productCard";
import { IProductListWording } from "~containers/fidSpace/wording/types";
import { ProductDto } from "~containers/services/product/types";
import { down } from "~styles/styleSheet";
import { useDeviceSize } from "~utils/useDeviceSize";
import { StyledProductsContainer } from "./ProductRow.style";

interface IProductList {
  products: ProductDto[];
  wording: IProductListWording;
}

const ProductRow: FC<IProductList> = ({ products, wording }) => {
  const { down } = useDeviceSize();
  const imagesURl = process.env.NEXT_PUBLIC_AMAZON_S3_URL;

  const getImageLink = (ean: string) => {
    const size = down.tablet ? "300x280" : "200x180";
    return imagesURl?.replace("size", size).replace("ean", ean) || "";
  };

  return (
    <StyledProductsContainer>
      {products.map(({ id, measure, label, points, price, unit, ean }) => (
        <Product
          key={id}
          id={id}
          imagePath={getImageLink(ean)}
          description={`${measure} ${unit}`}
          label={label}
          points={points}
          price={price}
          wording={wording}
        />
      ))}
    </StyledProductsContainer>
  );
};

export default ProductRow;
