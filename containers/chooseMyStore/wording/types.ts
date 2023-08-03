interface ICategory {
  name: string;
  logo: string;
}
interface IStoreFiler {
  title: string;
  categories: ICategory[];
}

interface IChooseMyStoreWording {
  title: string;
  description: string;
  searchPlaceholder: string;
  searchOrGeolocation: string;
  geolocationBtn: string;
  storeFilter: IStoreFiler;
  announcement: string;
  cities: string[];
  notice: string;
  chooseButton:string;
  removeButton:string;
  moreInfo:string;
  favoriteStore:string;
}

export default IChooseMyStoreWording;
