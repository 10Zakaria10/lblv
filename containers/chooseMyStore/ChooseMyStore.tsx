import type { FC } from "react";
import Popup from "~components/popup";
import { useAppDispatch, useAppSelector } from "~store";
import { selectMyStore, updateFilter, updateSearch } from "~store/myStore/slice";
import DialogContent from "./components/dialogContent";
import wording from "./wording";
interface IChooseMyStore {
  isChooseMyStoreOpen: boolean;
  openChooseMyStore: (value: boolean) => void;
}

const ChooseMyStore: FC<IChooseMyStore> = ({ isChooseMyStoreOpen, openChooseMyStore }) => {
  const handleSelectFilter = (id: number) => {
    dispatch(updateFilter(id));
  };
  const handleSearchFilter = (search: string)=>{
    dispatch(updateSearch(search))
  }
  const dispatch = useAppDispatch();

  const myStore = useAppSelector(selectMyStore);

  return (
    <Popup isOpen={isChooseMyStoreOpen} setOpen={openChooseMyStore} dialogTitle={wording.title}>
      <DialogContent wording={wording} handleClick={handleSelectFilter} myStoreState={myStore} handleSearch={handleSearchFilter}></DialogContent>
    </Popup>
  );
};

export default ChooseMyStore;
