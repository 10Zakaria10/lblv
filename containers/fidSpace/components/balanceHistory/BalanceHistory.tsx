import { FC } from "react";
import BalanceHistoryTable from "~components/balanceHistoryTable";
import { IBalanceHistoryData } from "~components/balanceHistoryTable/service/types";
import routes from "~components/Routes/routes";
import TitleBloc from "~components/titleBloc";
import { IBalanceHistoryWording } from "~containers/fidSpace/wording/types";
import { StyledBalanceHistoryContainer } from "./BalanceHistory.style";

interface IBalanceHistory {
  data: IBalanceHistoryData[];
  wording: IBalanceHistoryWording;
}

const BalanceHistory: FC<IBalanceHistory> = ({ data, wording }) => {
  return (
    <StyledBalanceHistoryContainer>
      <TitleBloc
        title={wording.blocTitle}
        linkText={wording.blocShowAll}
        linkAddress={routes.PURCHASE_HISTORY}
      />
      <BalanceHistoryTable data={data} wording={wording} />
    </StyledBalanceHistoryContainer>
  );
};

export default BalanceHistory;
