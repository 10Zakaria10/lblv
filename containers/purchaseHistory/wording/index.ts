import { fidSpaceWording } from '~containers/fidSpace/wording';
import IPurchaseHistoryWording, { IPurchaseHistorySortWording } from './types'

const purchaseHistorySortWording: IPurchaseHistorySortWording = {
  date_desc: "plus récent",
  date_asc: "moins récent"
}

const purchaseHistoryWording:IPurchaseHistoryWording = {
  ...fidSpaceWording.balanceHistory,
  sort: purchaseHistorySortWording,
  sortLabel: "Trier par :"
};
export default purchaseHistoryWording;
