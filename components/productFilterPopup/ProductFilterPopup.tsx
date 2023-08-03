import { useState } from "react";

import Button from "~components/button";
import { ButtonType } from "~components/button/Button";
import Popup from "~components/popup";
import type { IFilterWording } from "~containers/productBoost/wording/types";
import {
  getProductsFilterParams,
  getSelectedCategories,
} from "~containers/services/product/product.service";
import type {
  Category,
  IProductBoostFilter,
} from "~containers/services/product/types";

import {
  StyledButtonContainer,
  StyledCategory,
  StyledCategoryContainer,
  StyledFilterBodyContainer,
  StyledFilterHeader,
  StyledFilterSection,
  StyledFilterSectionHeader,
  StyledPopupFilterContainer,
  StyledSectionBody,
} from "./ProductFilterPopup.style";

import { Slider } from "@mui/material";
import type { FC } from "react";

interface IProductFilterPopup {
  open: boolean;
  togglePopup: () => void;
  categories: Category[];
  productBoostMinMax: number[];
  priceMinMax: number[];
  wording: IFilterWording;
  onApplyFilter: (filter: IProductBoostFilter) => void;
}

const ProductFilterPopup: FC<IProductFilterPopup> = ({
  open,
  togglePopup,
  categories,
  priceMinMax,
  productBoostMinMax,
  wording,
  onApplyFilter,
}) => {
  const [productBoostValue, setProductBoostValue] = useState<number[]>([5, 20]);

  const [productPriceValue, setProductPriceValue] = useState<number[]>([
    10, 400,
  ]);

  const [selectedCatgories, setSelectedCategories] = useState<number[]>([]);

  const handleProductPriceChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    setProductPriceValue(newValue as number[]);
  };

  const handleProductBoostChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    setProductBoostValue(newValue as number[]);
  };

  const getMarksForSlider = (state: number[]) => [
    {
      value: state[0],
      label: `${state[0]}`,
    },
    {
      value: state[1],
      label: `${state[1]}`,
    },
  ];

  const handleCategoryClick = (index: number) => {
    if (selectedCatgories.includes(index)) {
      setSelectedCategories([
        ...selectedCatgories.filter((catIndex) => catIndex !== index),
      ]);
      return;
    }
    setSelectedCategories((prvSelectedCats) => [...prvSelectedCats, index]);
  };

  const handleDeleteAllFilters = () => {
    setProductBoostValue([0, 100]);
    setProductPriceValue([0, 5000]);
    setSelectedCategories([]);
  };

  const handleApplyFilter = () => {
    const categoriesFilter: string[] = getSelectedCategories(
      selectedCatgories,
      categories,
    );
    const productsFilter = getProductsFilterParams(
      categoriesFilter,
      productPriceValue,
      productBoostValue,
    );
    onApplyFilter(productsFilter);
    togglePopup();
  };
  return (
    <Popup isOpen={open} setOpen={togglePopup}>
      <StyledPopupFilterContainer>
        <StyledFilterHeader onClick={handleDeleteAllFilters}>
          <p>{wording.delete}</p>
        </StyledFilterHeader>
        <StyledFilterBodyContainer>
          <StyledFilterSection>
            <StyledFilterSectionHeader>
              {wording.productBoost}
            </StyledFilterSectionHeader>
            <StyledSectionBody>
              <Slider
                value={productBoostValue}
                onChange={handleProductBoostChange}
                valueLabelDisplay="auto"
                marks={getMarksForSlider(productBoostValue)}
                min={productBoostMinMax[0]}
                max={productBoostMinMax[1]}
              />
            </StyledSectionBody>
          </StyledFilterSection>
          <StyledFilterSection>
            <StyledFilterSectionHeader>
              {wording.price}
            </StyledFilterSectionHeader>
            <StyledSectionBody>
              <Slider
                value={productPriceValue}
                onChange={handleProductPriceChange}
                valueLabelDisplay="auto"
                marks={getMarksForSlider(productPriceValue)}
                min={priceMinMax[0]}
                max={priceMinMax[1]}
              />
            </StyledSectionBody>
          </StyledFilterSection>
          <StyledFilterSection>
            <StyledFilterSectionHeader>
              {wording.categorie}
            </StyledFilterSectionHeader>
            <StyledSectionBody>
              <StyledCategoryContainer>
                {categories.map((category, index) => (
                  <StyledCategory
                    className={
                      selectedCatgories.includes(index) ? "selected" : ""
                    }
                    onClick={() => {
                      handleCategoryClick(index);
                    }}
                  >
                    {category.label}
                  </StyledCategory>
                ))}
              </StyledCategoryContainer>
            </StyledSectionBody>
          </StyledFilterSection>
          <StyledButtonContainer>
            <Button
              buttonType={ButtonType.FILLED}
              text={wording.dispaly}
              onClick={handleApplyFilter}
            />
          </StyledButtonContainer>
        </StyledFilterBodyContainer>
      </StyledPopupFilterContainer>
    </Popup>
  );
};

export default ProductFilterPopup;
