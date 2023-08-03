import IProductBoostWording, { IFilterWording, IProductListWording, ISortTypesWording } from './types'
const productListWording: IProductListWording = {
  blocTitle: "Produits Boost",
  results:" Résultats",
  points: "points",
  currency: "dhs",
  description: "La liste de produits Boost n’est pas disponible pour le moment, veuillez réessayer ultérieurement"
};
const filterWording : IFilterWording = {
  title: "Filtrer",
  sort: "Trie par:",
  default: "par default",
  delete: "Effacer",
  dispaly: "Afficher",
  price: "Prix (DH)",
  productBoost: "Points Boost",
  categorie: "Catégorie"
};
const sortTypesWording: ISortTypesWording = {
  POINTS_ASC: "Point croissant",
  POINTS_DESC: "Point décroissant",
  PRICE_ASC: "Prix croissant",
  PRICE_DESC: "Prix décroissant",
}
const productBoostWording: IProductBoostWording = {
  productList: productListWording,
  filter: filterWording,
  sortTypes: sortTypesWording,
}
export default productBoostWording;
