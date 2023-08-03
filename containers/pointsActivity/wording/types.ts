import { IPointsActivityWording } from "~containers/fidSpace/wording/types";

export interface IActivityPointsSortWording {
  date_asc:string;
  date_desc: string;
}

interface IActivityPointsWording extends IPointsActivityWording  {
  title: string;
  sort: IActivityPointsSortWording;
  sortLabel: string;
}

export default IActivityPointsWording;
