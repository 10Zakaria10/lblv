
export interface IProductListWording {
  blocTitle: string;
  results: string;
  points: string;
  currency: string;
  description: string;
}

export interface IFilterWording {
  title: string;
  sort: string;
  default: string;
  delete: string;
  dispaly: string;
  price: string;
  productBoost: string;
  categorie: string;
}

export interface ISortTypesWording {
  POINTS_ASC : string;
  POINTS_DESC : string;
  PRICE_ASC : string;
  PRICE_DESC : string;
}

interface IProductBoostWording {
  productList: IProductListWording;
  filter: IFilterWording;
  sortTypes: ISortTypesWording;

}

export default IProductBoostWording;
