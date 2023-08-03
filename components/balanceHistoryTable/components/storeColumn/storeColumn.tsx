import Image from "next/image";
import type { FC } from "react";
import { getStoreIconPath } from "~components/balanceHistoryTable/service/balanceHistory.service";
import { IStore } from "~components/balanceHistoryTable/service/types";
import { StyledStoreColumnContainer } from "./storeColumn.style";

interface IStoreColumn {
  store: IStore;
}

const StoreColumn: FC<IStoreColumn> = ({ store }) => {
  return (
    <StyledStoreColumnContainer>
      <Image width={28} height={20} src={getStoreIconPath(store.type)} />
      <span>{store.name}</span>
    </StyledStoreColumnContainer>
  );
};

export default StoreColumn;
