import { FC } from "react";
import BalanceHistoryTable from "~components/balanceHistoryTable";
import { IBalanceHistoryData } from "~components/balanceHistoryTable/service/types";
import PointsActivityTable from "~components/pointsActivityTable";
import { IPointsActivityData } from "~components/pointsActivityTable/service/types";
import TitleBloc from "~components/titleBloc";
import { IPointsActivityWording } from "~containers/fidSpace/wording/types";
import { StyledPointsActivityContainer } from "./PointsActivity.style";

interface IPointsActivity {
  data: IPointsActivityData[];
  wording: IPointsActivityWording;
}

const PointsActivity: FC<IPointsActivity> = ({ data, wording }) => {
  return (
    <StyledPointsActivityContainer>
      <TitleBloc title={wording.blocTitle} linkText={wording.showAll} />
      <PointsActivityTable wording={wording} data={data} />
    </StyledPointsActivityContainer>
  );
};

export default PointsActivity;
