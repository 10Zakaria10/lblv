export interface IBalanceHistoryWording {
  blocTitle: string;
  blocShowAll: string;
  storeTitleHeading: string;
  dateTitleHeading: string;
  totalAmountTitleHeading: string;
  totalBalanceTitleHeading: string;
  pointsText: string;
  currency: string;
  placeholder: string;
}
export interface IProductListWording {
  blocTitle: string;
  blocDescription?: string;
  blocShowAll?: string;
  points: string;
  currency: string;
}
export interface IHeaderWording {
  home: String;
  promotion: String;
  products: string;
  services: string;
  bringo: string;
  clubCarrefour: string;
}
export interface ISettingsWording {
  myAccount: string;
  activateNotifications:string;
  deactivateNotifications: string;
  logout:string;
  deleteAccount:string; 
}

export interface IWelcomeBannerDetailsWording {
  title: string;
  points: string;
  solde: string;
  info: string;
  profileCompletion: string;
}

export interface IWelcomeBannerWording {
  codePin: string;
  codePinTitle: string;
  codePinDesc: string;
  coupon: string;
  fidCard: string;
  details: IWelcomeBannerDetailsWording;
}

export interface IPointsActivityWording {
  title: string;
  date: string;
  pointsText: string;
  solde: string;
  blocTitle: string;
  showAll: string;
  generateCoupon: string;
  completeProfile: string;
  welcome: string;
  earnPoints: string;
  placeholder: string;
}

export interface IFidSpaceWording {
  productList: IProductListWording;
  balanceHistory: IBalanceHistoryWording;
  welcomeBanner: IWelcomeBannerWording;
  pointsActivity: IPointsActivityWording;
}
