import { Pagination, Stack } from "@mui/material";
import { FC, useState } from "react";
import Button from "~components/button";
import { ButtonType } from "~components/button/Button";
import DropDown from "~components/dropDown";
import ProductRow from "~components/productRow";
import TitleBloc from "~components/titleBloc";
import useProductQuery from "~containers/hooks/product/useProductQuery";
import { useDeviceSize } from "~utils/useDeviceSize";
import {
  StyledFilterContainer,
  StyledLabel,
  StyledPaginationContainer,
  StyledProductBoostContainer,
  StyledTitleBlockContainer,
} from "./ProductBoost.style";
import {
  getProductRows,
  getSizeToFetch,
  getSortType,
} from "~containers/services/product/product.service";
import productBoostWording from "./wording";
import { DropDownValueType, OptionsType } from "~components/dropDown/types";
import { DEFAULT_SORT_TYPE } from "~containers/services/product/constants";
import ProductFilterPopup from "~components/productFilterPopup";
import {
  getPriceMinMax,
  getProductBoostMinMax,
} from "~containers/services/product/category.service";
import useProductCategoryQuery from "~containers/hooks/product/useProductCategoryQuery";
import { IProductBoostFilter, IProductBoostParams } from "~containers/services/product/types";

interface IProductBoost {}

const ProductBoost: FC<IProductBoost> = ({}) => {
  const { down } = useDeviceSize();

  const {
    productList: wording,
    filter: filterWording,
    sortTypes: sortWording,
  } = productBoostWording;

  const [sortValue, setSortValue] = useState<OptionsType>({
    value: DEFAULT_SORT_TYPE,
    label: filterWording.default,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [productsFilter, setProductsFilter] = useState<IProductBoostFilter>();
  const size = getSizeToFetch(down);
  const params: IProductBoostParams = {
    ...productsFilter,
    page,
    size,
    sortType: getSortType(sortValue.value as string),
  };
  const { productPage } = useProductQuery(
    params,
  );
  const { categories } = useProductCategoryQuery();
  const productRows = getProductRows(productPage?.products || [], down);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  const handleChange = (newValue: DropDownValueType) => {
    setSortValue({
      value: newValue,
      label: sortWording[newValue as keyof typeof sortWording],
    });
  };

  const toggleFilterPopup = () => {
    setIsPopupOpen((isOpen) => !isOpen);
  };

  return (
    <StyledProductBoostContainer>
      <StyledTitleBlockContainer>
        <TitleBloc
          title={wording.blocTitle}
          description={
            productPage === undefined || productPage.totalElements === 0
              ? wording.description
              : productPage.totalElements + wording.results
          }
        />
        <StyledFilterContainer>
          <div>
            <StyledLabel>{filterWording.sort}</StyledLabel>
            <DropDown
              placeHolder={{
                label: filterWording.default,
                value: DEFAULT_SORT_TYPE,
              }}
              value={sortValue.value}
              onChange={handleChange}
              options={Object.keys(sortWording).map((key) => ({
                value: key,
                label: sortWording[key as keyof typeof sortWording],
              }))}
            />
          </div>
          <Button
            text={filterWording.title}
            buttonType={ButtonType.OUTLINED}
            onClick={toggleFilterPopup}
          />
          <ProductFilterPopup
            open={isPopupOpen}
            togglePopup={toggleFilterPopup}
            categories={categories || []}
            priceMinMax={getPriceMinMax()}
            productBoostMinMax={getProductBoostMinMax()}
            wording={filterWording}
            onApplyFilter={setProductsFilter}
          />
        </StyledFilterContainer>
      </StyledTitleBlockContainer>
      {productRows.map((row, index) => (
        <ProductRow products={row} wording={wording} key={index} />
      ))}
      <StyledPaginationContainer>
        <Stack spacing={2}>
          <Pagination
            count={productPage?.totalPages}
            boundaryCount={0}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </Stack>
      </StyledPaginationContainer>
    </StyledProductBoostContainer>
  );
};

export default ProductBoost;
