import { FC, useMemo } from "react";
import Table from "~components/table";
import { IPointsActivityWording } from "~containers/fidSpace/wording/types";
import { getPointsActivityColumns } from "./service/pointsActivityColumnDefinition";
import { IPointsActivityData } from "./service/types";

interface IPointsActivityTable {
  wording: IPointsActivityWording;
  data: IPointsActivityData[];
}

const PointsActivityTable: FC<IPointsActivityTable> = ({ data, wording }) => {
  const columns = useMemo(() => getPointsActivityColumns(wording), []);

  return (
    <Table data={data} columns={columns} placeholder={wording.placeholder} />
  );
};

export default PointsActivityTable;
