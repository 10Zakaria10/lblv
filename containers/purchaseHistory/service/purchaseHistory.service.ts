import { IBalanceHistoryData } from "~components/balanceHistoryTable/service/types"

export const PURCHASE_VALUE_SORT = {
    date_asc: "date_asc", 
    date_desc:"date_desc"
}

export const sortPurchaseHistory = (purchaseHistory:IBalanceHistoryData[], sortType:string) => {
    if(purchaseHistory.slice(0).length === 0) return [];
    
    if(sortType === PURCHASE_VALUE_SORT.date_asc){
        return purchaseHistory.slice(0).sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    else if (sortType === PURCHASE_VALUE_SORT.date_desc){

        return purchaseHistory.slice(0).sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    else return purchaseHistory;
}