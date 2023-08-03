import Image from "next/image";
import { useRouter } from "next/router";
import type { FC } from "react";
import routes from "~components/Routes/routes";
import TitleBloc from "~components/titleBloc";
import useProductDetailsQuery from "~containers/hooks/product/useProductDetailsQuery";
import { getProductValidityDateToDisplay } from "~containers/services/product/product.service";
import {
  StyledBonusContainer,
  StyledBoostContainer,
  StyledCategory,
  StyledCategoryConatiner,
  StyledDetailsContainer,
  StyledDetailsContent,
  StyledDetailsContentContainer,
  StyledDetailsImageContainer,
  StyledDetailsParagraph,
  StyleDescParagraph,
  StyledParagraphImageContainer,
  StyledPointsTypographyBold,
  StyledPointsTypographySmall,
  StyledProductDetailsContainer,
  StyledProductName,
  StyledProductPrice,
  StyledProductXSmallDesc,
  StyledShareButtonContainer,
} from "./ProductDetails.style";
import productDetailsWording from "./wording";

interface IProductDetails {
  id: string | undefined;
}

const ProductDetails: FC<IProductDetails> = ({ id }) => {
  const router = useRouter();
  const wording = productDetailsWording;

  const { product } = useProductDetailsQuery(id);

  const handleOnClick = () => {
    router.push(routes.PRODUCT_BOOST);
  };

  return (
    <StyledProductDetailsContainer>
      <TitleBloc title={wording.title} />
      <StyledCategoryConatiner>
        <StyledBoostContainer onClick={handleOnClick}>
          {wording.title}
        </StyledBoostContainer>
        <StyledCategory>{">"}</StyledCategory>
        <StyledCategory>{product?.category}</StyledCategory>
      </StyledCategoryConatiner>
      {product && (
        <StyledDetailsContainer>
          <StyledDetailsImageContainer>
            <Image
              src="https://label-factory-fidelite.s3.amazonaws.com/200x180/1223334444555.jpg"
              layout="fill"
            />
          </StyledDetailsImageContainer>
          <StyledDetailsContentContainer>
            <StyledDetailsContent>
              <StyledBonusContainer>
                <StyledPointsTypographyBold>
                  +{product.points}
                </StyledPointsTypographyBold>
                <StyledPointsTypographySmall>
                  {wording.points}
                </StyledPointsTypographySmall>
              </StyledBonusContainer>
              <StyledProductName>{product.label}</StyledProductName>
              <StyledProductXSmallDesc>{`${product.measure} ${product.unit}`}</StyledProductXSmallDesc>
              <StyledProductPrice>{product.price}dhs</StyledProductPrice>
              <StyledProductXSmallDesc>
                {wording.validity
                  .replace(
                    "{from}",
                    getProductValidityDateToDisplay(product.validityFrom),
                  )
                  .replace(
                    "{to}",
                    getProductValidityDateToDisplay(product.validityTo),
                  )}
              </StyledProductXSmallDesc>
              <StyledDetailsParagraph>
                <StyledParagraphImageContainer>
                  <Image
                    src={"../images/paragraph.svg"}
                    width={24}
                    height={24}
                  />
                </StyledParagraphImageContainer>
                <StyledProductXSmallDesc>
                  {wording.description}
                </StyledProductXSmallDesc>
              </StyledDetailsParagraph>
              <StyleDescParagraph>{wording.information}</StyleDescParagraph>
            </StyledDetailsContent>
          </StyledDetailsContentContainer>
        </StyledDetailsContainer>
      )}
    </StyledProductDetailsContainer>
  );
};
export default ProductDetails;
