import React, { Dispatch, SetStateAction } from "react";
import { City, storeDto } from "~containers/chooseMyStore/types";
import StoreDetails from "../storeDetails";
import { StoreCityItemDataWrapper, StoreCityItemStores, StoreCityItemTitle, StoreCityItemWrapper, StyledArrowDownIosRoundedIcon, StyledArrowForwardIosRoundedIcon } from "./storesCityItem.style";
interface IStoresCityItem {
 city:string;
 cityStores?: storeDto[];
 setFavStore: Dispatch<SetStateAction<string|null>>;
 favStoreId: string|null;
}
const StoresCityItem: React.FC<IStoresCityItem> = ({
city, cityStores, setFavStore, favStoreId
}) => {
  const [isStoresListClosed, setStoresListClosed] = React.useState<boolean>(true);
  const handleStoresListOpen = () =>{
    setStoresListClosed(!isStoresListClosed);
  }
  const reOrderCityStores = (cityStores?: storeDto[]) : (storeDto[] | undefined) => {
    const favStore = cityStores?.filter((store)=>{
      if(store.id === favStoreId){
        return store
      }
    })
    const remainingStores = cityStores?.filter((store)=>{
      if(store.id !== favStoreId){
        return store
      }
    })
    return favStore?.concat(remainingStores ?? [])
  }
  return (
    <>
      <StoreCityItemWrapper onClick={handleStoresListOpen}>
        <StoreCityItemDataWrapper>
          <StoreCityItemTitle>{city}</StoreCityItemTitle>
          <StoreCityItemStores>{cityStores ? cityStores.length:0} magasins</StoreCityItemStores>
        </StoreCityItemDataWrapper>
        { isStoresListClosed ? <StyledArrowForwardIosRoundedIcon /> : <StyledArrowDownIosRoundedIcon /> }
      </StoreCityItemWrapper>
      <div hidden = {isStoresListClosed}>
        {reOrderCityStores(cityStores)?.map(store =>{
          return <StoreDetails setFavStore={setFavStore} favStoreId={favStoreId} store={store}/>
        })}
      </div>
    </>
  );
};
export default StoresCityItem;
