import { FC, useEffect, useState } from "react";
import BalanceHistoryTable from "~components/balanceHistoryTable";
import DropDown from "~components/dropDown";
import { DropDownValueType, OptionsType } from "~components/dropDown/types";
import TitleBloc from "~components/titleBloc";
import usePurchaseHistoryQuery from "~containers/hooks/fidSpace/usePurchaseHistoryQuery";
import {
  StyledBalanceHistoryContainer,
  StyledLabel,
  StyledSortContainer,
  StyledTitleBlockContainer,
} from "./PurchaseHistory.style";
import {
  PURCHASE_VALUE_SORT,
  sortPurchaseHistory,
} from "./service/purchaseHistory.service";
import purchaseHistoryWording from "./wording";

interface IPurchaseHistory {}

const PurchaseHistory: FC<IPurchaseHistory> = ({}) => {
  const { purchaseHistory } = usePurchaseHistoryQuery(10);
  const { sort: sortWording, blocTitle, sortLabel } = purchaseHistoryWording;

  const [sortValue, setSortValue] = useState<OptionsType>({
    value: PURCHASE_VALUE_SORT.date_desc,
    label: sortWording.date_desc,
  });

  const purchaseHistoryToDisplay = sortPurchaseHistory(
    purchaseHistory || [],
    sortValue.value as string,
  );

  const handleChange = (newValue: DropDownValueType) => {
    setSortValue({
      value: newValue,
      label: sortWording[newValue as keyof typeof sortWording],
    });
  };

  return (
    <StyledBalanceHistoryContainer>
      <StyledTitleBlockContainer>
        <TitleBloc title={blocTitle} />
        <StyledSortContainer>
          <StyledLabel>{sortLabel}</StyledLabel>
          <DropDown
            value={sortValue.value}
            onChange={handleChange}
            options={Object.keys(sortWording).map((key) => ({
              value: key,
              label: sortWording[key as keyof typeof sortWording],
            }))}
          />
        </StyledSortContainer>
      </StyledTitleBlockContainer>
      <BalanceHistoryTable
        data={purchaseHistoryToDisplay || []}
        wording={purchaseHistoryWording}
      />
    </StyledBalanceHistoryContainer>
  );
};

export default PurchaseHistory;
