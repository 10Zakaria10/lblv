import apiClient from "~utils/apiClient";
import { Category } from "./types";

const CATEGORIES_LIST_POPUP = [
    "Animalerie",
    "Bébé",
    "Charcuterie",
    "Poissonnerie",
    "Traiteur",
    "Fromagerie",
    "Entretien et nettoyage",
    "Epicerie sucrée",
    "Surgelés",
    "Pains et pâtisseries",
    "Eaux et boissons",
    "Produits du monde"
]

export const getProductCatgories = ()=>{
    return apiClient.get<Category[]>(`/products/categories`);
}

export const getProductBoostMinMax = () =>{
    return [0, 100]
}

export const getPriceMinMax = () =>{
    return [0, 5000]
}