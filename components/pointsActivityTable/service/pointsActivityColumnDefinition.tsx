import { Column } from "react-table";
import { IPointsActivityWording } from "~containers/fidSpace/wording/types";
import ActivityColumn from "../components/activityColumn";
import PointsColumn from "../components/pointsColumn";
import { getValueToDisplay } from "./pointsActivity.service";
import { IPointsActivityData } from "./types";

export const getPointsActivityColumns = ({
  title,
  date,
  pointsText,
  solde,
}: IPointsActivityWording): Array<Column<IPointsActivityData>> => [
  {
    Header: title,
    accessor: ({ type }) => {
      return <ActivityColumn activityType={type} />;
    },
    disableSortBy: true,
  },
  {
    Header: date,
    accessor: ({ activityDate }) => {
      return new Date(activityDate).toLocaleDateString();
    },
    disableSortBy: false,
  },
  {
    Header: pointsText,
    accessor: ({ points, type }) => {
      return (
        <PointsColumn
          points={getValueToDisplay(points, type)}
          pointsText={pointsText}
        />
      );
    },
    disableSortBy: true,
  },
  {
    Header: solde,
    accessor: ({ balance }) => {
      return `${balance} ${pointsText}`;
    },
    disableSortBy: true,
  },
];
