import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { City, storeDto, storeTypeToICategoryMapper } from "~containers/chooseMyStore/types";
import { ExtraInfoButton, ExtraInfoIconDown, ExtraInfoIconUp, FavoriteStoreTag, MarketIcon, PhoneIcon, PhoneNumber, PhoneNumberText, StoreAddress, StoreDetailsContainer, StoreDetailsWrapper, StoreDistance, StoreExtraDetailsContainer, StoreFooter, StoreTitle, WeeklySchedule, WeeklyScheduleItem, WeeklyScheduleItemActive } from "./StoreDetails.style";
import wording from "../../wording/";
import { AmPmTo24hFormat, Timeframe, getDay } from "~utils/dateTimeUtils";
import FavoriteStoreButton from "../favoriteStoreButton";
import { StoreTypeEnum } from "~types/storeTypes";
interface IStoreDetails {
  store?: storeDto
  setFavStore: Dispatch<SetStateAction<string|null>>;
  favStoreId: string|null;

}

const StoreDetails: FC<IStoreDetails> = ({store, favStoreId, setFavStore}) => {
  const getStoreIconFromType = (type:StoreTypeEnum) => {
    const logo = wording.storeFilter.categories.filter(category=>{
      if(category.name === storeTypeToICategoryMapper[type]){
         return category;
      }
    })
    return logo.map(e=>{
      return <MarketIcon src={e.logo} alt={e.name+" logo"}/>
    })
  }
  const [isExtraDetailsClosed, setIsExtraDetailsClosed] = useState(true)
  const handleOpenExtraDetails = ()=>{
    setIsExtraDetailsClosed(!isExtraDetailsClosed)
  }
  useEffect(()=>{},[])
  return (
    <StoreDetailsWrapper>
      <StoreDetailsContainer>
        <StoreTitle>
          {getStoreIconFromType(store?.type ?? StoreTypeEnum.CARREFOUR)}
          <span>{store?.name}</span>
        </StoreTitle>
        {store?.id === favStoreId ? <FavoriteStoreTag>{wording.favoriteStore}</FavoriteStoreTag> : ""}
        <StoreDistance>

        </StoreDistance>
        <StoreAddress>
          {store?.address}
        </StoreAddress>
        <StoreFooter>
          <ExtraInfoButton onClick={handleOpenExtraDetails}>
            <span>{wording.moreInfo}</span>
            {isExtraDetailsClosed ? <ExtraInfoIconDown /> : <ExtraInfoIconUp />}
          </ExtraInfoButton>
          <FavoriteStoreButton setFavStore={setFavStore} storeId={store?.id ?? null} favStoreId={favStoreId}/>
        </StoreFooter>
      </StoreDetailsContainer>
      <div hidden = {isExtraDetailsClosed}>
        <StoreExtraDetailsContainer>
          <WeeklySchedule>
            {store?.regularHours.map(item => {
              item.day=item.day.toLowerCase();
              const day = item.day.charAt(0).toUpperCase() + item.day.substring(1,3);
              if(item.day === getDay()){
                return <WeeklyScheduleItemActive className="active">
                <span>{day}:</span><span>{AmPmTo24hFormat(item.openingHour,Timeframe.AM)} - {AmPmTo24hFormat(item.closingHour,Timeframe.PM)}</span>
              </WeeklyScheduleItemActive>
              }
              return <WeeklyScheduleItem className="active">
                <span>{day}:</span><span>{AmPmTo24hFormat(item.openingHour,Timeframe.AM)} - {AmPmTo24hFormat(item.closingHour,Timeframe.PM)}</span>
              </WeeklyScheduleItem>
            })}
          </WeeklySchedule>
          <PhoneNumber>
            <PhoneIcon/>
            <PhoneNumberText>{store?.phoneNumber}</PhoneNumberText>
          </PhoneNumber>
        </StoreExtraDetailsContainer>
      </div>

    </StoreDetailsWrapper>
  );
};

export default StoreDetails;
