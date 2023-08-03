import PinDropIcon from "@mui/icons-material/PinDrop";
import { Typography } from "@mui/material";
import * as React from "react";
import IconTextField from "~components/iconTextField";
import IChooseMyStoreWording from "~containers/chooseMyStore/wording/types";
import {
  DialogContentWrapper,
  SearchAndGeolocationWrapper,
  StoreFilterMapper,
  FilterTitle,
  MapStoresWrapper,
  DialogContentHeader,
} from "./DialogContent.style";
import StoreFilterStore from "../storeFilter";
import { IMyStoreState } from "~store/myStore/slice";
import GoogleMapContainer from "~components/googleMapContainer";
import StoresList from "../storesList";
import { storeDto } from "~containers/chooseMyStore/types";
import useStoresQuery from "~containers/chooseMyStore/hooks/useStoresQuery";
import { filterStoresByType } from "~containers/chooseMyStore/services/chooseMyStore.service";
interface IDialogContent {
  wording: IChooseMyStoreWording;
  handleClick: (id: number) => void;
  handleSearch: (search: string) => void;
  myStoreState: IMyStoreState;
}
const DialogContent: React.FC<IDialogContent> = ({
  wording,
  handleClick,
  myStoreState,
  handleSearch,
}) => {
  const [allStores, setAllStores] = React.useState<storeDto[]>()
  const [search, setSearch] = React.useState("")
  const {loading , stores} = useStoresQuery( {location: search});
  if(!loading && allStores === undefined ){
    setAllStores(filterStoresByType(myStoreState.filter,stores));
  }
  React.useEffect(()=>{
    setSearch(myStoreState.searchValue)
  }, [myStoreState.searchValue])
  React.useEffect(()=>{
    if(stores !== undefined){
      setAllStores([...filterStoresByType(myStoreState.filter,stores)])
    }else{
      setAllStores([])
    }
  }, [stores, myStoreState.filter])
  
  const [favStore, setFavStore] = React.useState<string|null>("");
  const handleSearchChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    handleSearch(event.currentTarget.value);
  }
  return (
    <>
      <DialogContentHeader>
        <DialogContentWrapper>
          <Typography>{wording.description} </Typography>
          <SearchAndGeolocationWrapper>
            <IconTextField
              iconStart={<PinDropIcon />}
              placeholder={wording.searchPlaceholder}
              onChange={handleSearchChange}
            />
          </SearchAndGeolocationWrapper>
        </DialogContentWrapper>
        <FilterTitle>{wording.storeFilter.title}</FilterTitle>
        <StoreFilterMapper>
          {wording.storeFilter.categories.map((elem, index) => (
            <StoreFilterStore
              key={index}
              id={index}
              isChecked={myStoreState.filter[index]}
              text={elem.name}
              storeCategoryIconPath={elem.logo}
              onClick={handleClick}
            />
          ))}
        </StoreFilterMapper>
      </DialogContentHeader>
      <MapStoresWrapper>
        <StoresList stores={allStores} setFavStore={setFavStore} favStoreId={favStore}/>
        <GoogleMapContainer stores={allStores}/>
      </MapStoresWrapper>
    </>
  );
};
export default DialogContent;
