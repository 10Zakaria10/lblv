import { IPointsActivityData } from "~components/pointsActivityTable/service/types";

export const ACTIVITY_POINTS_VALUE_SORT = {
    date_asc: "date_asc", 
    date_desc:"date_desc"
}

export const sortPointsActivityData = (pointsActivity:IPointsActivityData[], sortType:string) => {
    const dataCopy = pointsActivity.slice(0)
    if(dataCopy.length === 0) return [];
    
    if(sortType === ACTIVITY_POINTS_VALUE_SORT.date_asc){
        return dataCopy.sort((a,b) => new Date(a.activityDate).getTime() - new Date(b.activityDate).getTime());
    }

    else if (sortType === ACTIVITY_POINTS_VALUE_SORT.date_desc){

        return dataCopy.sort((a,b) => new Date(b.activityDate).getTime() - new Date(a.activityDate).getTime());
    }
    else return dataCopy;
}