import { FC, useEffect, useState } from "react";
import DropDown from "~components/dropDown";
import { DropDownValueType, OptionsType } from "~components/dropDown/types";
import PointsActivityTable from "~components/pointsActivityTable";
import { IPointsActivityData } from "~components/pointsActivityTable/service/types";
import TitleBloc from "~components/titleBloc";
import useActivityPointsQuery from "~containers/hooks/fidSpace/useActivityPointsQuery";
import { PURCHASE_VALUE_SORT } from "~containers/purchaseHistory/service/purchaseHistory.service";
import {
  StyledLabel,
  StyledPointsActivityContainer,
  StyledSortContainer,
  StyledTitleBlockContainer,
} from "./PointsActivity.style";
import { sortPointsActivityData } from "./service/pointsActivity.service";
import pointsActivityWording from "./wording";

interface IPointsActivity {}

const PointsActivity: FC<IPointsActivity> = ({}) => {
  const { sort: sortWording, blocTitle, sortLabel } = pointsActivityWording;

  const { activityPoints } = useActivityPointsQuery(10);

  const [sortValue, setSortValue] = useState<OptionsType>({
    value: PURCHASE_VALUE_SORT.date_desc,
    label: sortWording.date_desc,
  });

  const activityPointsData = sortPointsActivityData(
    activityPoints || [],
    sortValue.value as string,
  );

  const handleChange = (newValue: DropDownValueType) => {
    setSortValue({
      value: newValue,
      label: sortWording[newValue as keyof typeof sortWording],
    });
  };
  return (
    <StyledPointsActivityContainer>
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
      <PointsActivityTable
        data={activityPointsData || []}
        wording={pointsActivityWording}
      />
    </StyledPointsActivityContainer>
  );
};

export default PointsActivity;
