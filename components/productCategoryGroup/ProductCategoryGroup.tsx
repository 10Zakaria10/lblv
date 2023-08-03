import { Category } from "@mui/icons-material";
import type { FC } from "react";
import { GroupedReceiptLine } from "~containers/services/receipt/types";
import {
  StyledCategoryGroupContainer,
  StyledCategoryName,
  StyledProductDetailsContainer,
  StyledProductDetails,
  StyledProductName,
  StyledPrice,
} from "./ProductCategoryGroup.style";

interface IProductCategoryGroup {
  receiptLines: GroupedReceiptLine[];
}

const ProductCategoryGroup: FC<IProductCategoryGroup> = ({ receiptLines }) => {
  return (
    <StyledCategoryGroupContainer>
      {receiptLines.map(({ category, items }) => (
        <div>
          <StyledCategoryName>{category}</StyledCategoryName>
          <StyledProductDetailsContainer>
            {items.map((receiptLine) => (
              <StyledProductDetails>
                <StyledProductName>
                  <span>{receiptLine.quantity}</span>
                  {receiptLine.label}
                </StyledProductName>
                <StyledPrice>
                  {receiptLine.unitPriceTTC * receiptLine.quantity}
                </StyledPrice>
              </StyledProductDetails>
            ))}
          </StyledProductDetailsContainer>
        </div>
      ))}
    </StyledCategoryGroupContainer>
  );
};

export default ProductCategoryGroup;
