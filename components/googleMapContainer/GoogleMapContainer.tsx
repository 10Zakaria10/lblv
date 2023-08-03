import * as React from "react";
import {Marker, GoogleApiWrapper} from 'google-maps-react';
import { StyledMap } from "./GoogleMapContainer.style";
import { storeDto } from "~containers/chooseMyStore/types";
import { StoreTypeEnum } from "~types/storeTypes";

interface LatLng {
  lat: number;
  lng: number;
}
export interface IMapContainerProps {
  stores?: storeDto[];
  google:any;
}
export const storeTypeToMarkerIcon = {
  [StoreTypeEnum.CARREFOUR_GOURMET]: "pin-carrefour-gourmet",
  [StoreTypeEnum.CARREFOUR] : "pin-carrefour",
  [StoreTypeEnum.CARREFOUR_MARKET] : "pin-carrefour-market",
  [StoreTypeEnum.CARREFOUR_EXPRESS] : "pin-carrefour-express",
}
const MapContainer: React.FC<IMapContainerProps> = ({ google, stores }) => {
  const getMarkerUrlByStoreType = (type:StoreTypeEnum) => {
    return "/images/"+storeTypeToMarkerIcon[type]+".svg"
  }
  const [activeMarkerId,setActiveMarkerId] = React.useState<string|null>(null)
  const getMarkerSize = (storeId: string) => {
    if (storeId === activeMarkerId ){
      return new google.maps.Size(120,120)
    }
    return new google.maps.Size(80,80)
  }
  const handleMarkerClick = (storeId: string) => {
    if (storeId === activeMarkerId ){
      return () => setActiveMarkerId(null)
    }
    return () => setActiveMarkerId(storeId)
  }
  const getMarkers = () => {
    return stores?.map((store)=>{
      return <Marker 
      position={{lat: store.latitude, lng: store.longitude}}
      icon={{
        url: getMarkerUrlByStoreType(store.type),
        scaledSize: getMarkerSize(store.id),
      }}
      title={store.name}
      onClick={handleMarkerClick(store.id)}
      />
    })
  }
  return (
    <StyledMap google={google}
    initialCenter={{
      lat: 33.5731,
      lng: -7.5898
    }}
    zoom={13}
    >
      {
        getMarkers()
      }
    </StyledMap>
  );
};

const GoogleMapContainer = GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
})(MapContainer);

export default GoogleMapContainer;
