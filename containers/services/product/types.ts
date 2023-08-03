export interface ProductDto {
  id: string;
  points: number;
  imageLink: string;
  label: string;
  measure: number;
  unit: string;
  price: number;
  category: string;
  validityFrom: string;
  validityTo: string;
  ean: string;
}

export interface ProductPage {
  products: ProductDto[];
  totalPages: number;
  totalElements: number;
}

export interface IProductBoostFilter {
  minPrice?: number;
  maxPrice?: number;
  minPoints?: number;
  maxPoints?: number;
  categories?: string[];
}

export interface IProductBoostParams extends IProductBoostFilter {
  page: number;
  size?: number;
  sortType?: string;
}

export interface SortType {
  key: string;
  value: string;
}

export interface Category {
  id: string;
  label: string;
}
