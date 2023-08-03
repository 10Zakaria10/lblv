import { fidSpaceWording } from '~containers/fidSpace/wording';
import IActivityPointsWording from './types';
import IPointsActivityWording, { IActivityPointsSortWording } from './types';
const activityPointsSortWording: IActivityPointsSortWording = {
  date_desc: "plus récent",
  date_asc: "moins récent"
}

const pointsActivityWording: IActivityPointsWording = {
  ...fidSpaceWording.pointsActivity,
  sort: activityPointsSortWording,
  sortLabel: "Trier par :"
};
export default pointsActivityWording;
