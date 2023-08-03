import { Column } from "react-table";
import { IBalanceHistoryWording } from "~containers/fidSpace/wording/types";
import PointsColumn from "../components/pointsColumn";
import StoreColumn from "../components/storeColumn";
import { IBalanceHistoryData } from "./types";

export const getBalanceHistoryColumn = ({
  storeTitleHeading,
  totalAmountTitleHeading,
  totalBalanceTitleHeading,
  dateTitleHeading,
  pointsText,
  currency,
}: IBalanceHistoryWording): Array<Column<IBalanceHistoryData>> => {
  return [
    {
      Header: storeTitleHeading,
      accessor: ({ store }) => {
        return <StoreColumn store={store} />;
      },
      disableSortBy: true,
    },
    {
      Header: dateTitleHeading,
      accessor: ({ createdAt }) => {
        return new Date(createdAt).toLocaleDateString();
      },
      disableSortBy: false,
    },
    {
      Header: totalAmountTitleHeading,
      accessor: ({ totalAmountTTC }) => {
        return `${totalAmountTTC} ${currency}`;
      },
      disableSortBy: true,
    },
    {
      Header: totalBalanceTitleHeading,
      accessor: ({ balance }) => {
        return <PointsColumn points={balance} pointsText={pointsText} />;
      },
      disableSortBy: true,
    },
  ];
};
