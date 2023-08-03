import { useRouter } from "next/router";
import { FC, useMemo } from "react";
import routes from "~components/Routes/routes";
import Table from "~components/table";
import { IBalanceHistoryWording } from "~containers/fidSpace/wording/types";
import { getBalanceHistoryColumn } from "./service/balanceHistoryColumnDefinition";
import { IBalanceHistoryData } from "./service/types";

interface IBalanceHistory {
  data: IBalanceHistoryData[];
  wording: IBalanceHistoryWording;
}

const BalanceHistoryTable: FC<IBalanceHistory> = ({ data, wording }) => {
  const columns = useMemo(() => getBalanceHistoryColumn(wording), []);
  const router = useRouter();
  const onRowClick = (id: string) =>
    router.push(`${routes.PURCHASE_HISTORY}/${id}`);
  return (
    <Table
      data={data}
      columns={columns}
      placeholder={wording.placeholder}
      onRowClick={onRowClick}
    />
  );
};

export default BalanceHistoryTable;
