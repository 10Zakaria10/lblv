import { StoreTypeEnum } from "~types/storeTypes";
import apiClient from "~utils/apiClient";
import { City, ICurrentClient, IFavStoreParams, IGetStoresParams, storeDto, storeTypeToICategoryMapper } from "../types";
import chooseMyStoreWording from "../wording";

const getStores = (params?: IGetStoresParams) => {
    return apiClient.get<storeDto[]>("/stores",{params});
};
export const getFilteredStoresByCity = (cities:City[], stores:storeDto[]) => {
    const allCities = cities.map(element => {
        const cityStores = stores?.filter(store=>{
        if(store.city.id === element.id){
            return store
        }
        })
        return {
        city: element.name,
        stores: cityStores,
        }
    });
    return allCities.filter((city)=>{
        if(city.stores.length>0){
            return city
        }
    })
}
export const filterStoresByType = (storesChecked: Boolean[], stores?:storeDto[]) =>{
    if(storesChecked.indexOf(true) !== -1){
        const storesTypes = chooseMyStoreWording.storeFilter.categories.map((elem, index) =>{
            if(storesChecked[index]){
                return Object.keys(storeTypeToICategoryMapper)[Object.values(storeTypeToICategoryMapper).indexOf(elem.name)]
            }
            return null
        })
        return stores?.filter((store)=>{
            if( storesTypes.includes(store.type) ){
                return store
            }
        }) ?? []
    }
    return stores ?? [];
}

const addFavStore = (params?: IFavStoreParams) => {
    return apiClient.post("/clients/favoriteStore",{data:params});
} 
const deleteFavStore = (params?: IFavStoreParams) => {
    return apiClient.delete("/clients/favoriteStore",{params});
}
export const getClient = () => {
    return apiClient.get<ICurrentClient>("/clients/current");
};
export const getCities = () => {
    return apiClient.get<City[]>("/global-param/cities");
};
export default {
    getStores,
    addFavStore,
    deleteFavStore,
    getClient
};
