const CLIENT = "client";
const WALLET = "wallet";
const ACTIVITY_POINTS = "activityPoints";
const PURCHASE_HISTORY = "purchase_history";


export const clientQueryKey = () => {
  return [CLIENT];
};

export const walletQueryKey = () => {
  return [WALLET];
}


export const activityPointsKey = (size: number) => {
  return [ACTIVITY_POINTS, size];
};

export const purchaseHistoryKey = (size: number) => {
  return [PURCHASE_HISTORY, size];
};
