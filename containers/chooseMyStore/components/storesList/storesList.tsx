import Router from "next/router";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import Button from "~components/button";
import routes from "~components/Routes/routes";
import useCitiesQuery from "~containers/chooseMyStore/hooks/useCitiesQuery";
import useFavStoreQuery from "~containers/chooseMyStore/hooks/useFavStoreQuery";
import { getFilteredStoresByCity } from "~containers/chooseMyStore/services/chooseMyStore.service";
import { City, IStoresByCity, storeDto} from "~containers/chooseMyStore/types";
import wording from "../../wording";
import StoresCityItem from "../storesCityItem";

import { InfoCircleIcon, NoStoresPlaceholder, Notice, StoreListFooter, StoresListBody, StyledButtonWrapper, StyledSmsFailedOutlinedIcon, StyledStoresList } from "./storesList.style";
interface IStoresList{
  stores?: storeDto[];
  setFavStore: Dispatch<SetStateAction<string|null>>;
  favStoreId: string|null;
}

const StoresList: React.FC<IStoresList> = ({
  stores,
  setFavStore,
  favStoreId
}) => {
  const [storesByCity, setStoresByCity] = React.useState<IStoresByCity[]>()
  const {loading: citiesLoading, cities} = useCitiesQuery();
  const {loading: favoriteStoreLoading, favoriteStore} = useFavStoreQuery();
  const listHeadRef = React.useRef(null)
  useEffect(() => {
    if(!citiesLoading){
      setStoresByCity(getFilteredStoresByCity(cities??[],stores ?? []));
    }
  }, [stores]);
  if(!favoriteStoreLoading && favStoreId === ""){
    setFavStore(favoriteStore?.id ?? null)
  }
  const handleButtonClick = () => {
    Router.push(routes.MY_SPACE)
  }
  const getButton = () =>{
    return <Button text="Valider" disabled={!areStoresExisting() || favStoreId===null} onClick={handleButtonClick}/>
  }
  const areStoresExisting = () => {
    return Boolean(stores !== undefined && stores.length > 0 && storesByCity?.length)
  }
  const reorderCities = (cities?: IStoresByCity[]) => {
    const favStoreCity = cities?.filter((city)=>{
      if(city.city === favoriteStore?.city.name){
        return city
      }
    })
    const remainingStoreCities = cities?.filter((city)=>{
      if(city.city !== favoriteStore?.city.name){
        return city
      }
    })
    return favStoreCity?.concat(remainingStoreCities ?? [])
  }
  return (
    <StyledStoresList ref={listHeadRef}>
      <Notice>
        <StyledSmsFailedOutlinedIcon/>
        <span>{wording.notice}</span>
      </Notice>
      <StoresListBody>
        { areStoresExisting() ?
            reorderCities(storesByCity)?.map(element => {
                return <StoresCityItem setFavStore={setFavStore} favStoreId={favStoreId} city={element.city} cityStores={element.stores}/>
              })
            :
            <NoStoresPlaceholder>
              <div>           
                <InfoCircleIcon src="/images/info-circle.svg"/>
                <p>Aucun magasin ne correspond à votre recherche<br/><br/>Veuillez réessayer</p>
              </div>
            </NoStoresPlaceholder>
        }
      </StoresListBody>
      <StoreListFooter>
        <StyledButtonWrapper>
          {getButton()}
        </StyledButtonWrapper>
      </StoreListFooter>
    </StyledStoresList>
  );
};
export default StoresList;
