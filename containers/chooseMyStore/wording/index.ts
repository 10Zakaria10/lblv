import IChooseMyStoreWording from "./types";

const chooseMyStoreWording: IChooseMyStoreWording = {
  title: "Choisissez votre magasin",
  description: "Saisissez une adresse ou cliquez sur Me géolocaliser pour afficher les magasins les plus proches.",
  searchPlaceholder: "Ville, code postal, adresse",
  searchOrGeolocation: " ou ",
  geolocationBtn: "Me géolocaliser  ",
  storeFilter: {
    title: "Voir les enseignes : ",
    categories: [
      { name: "Carrefour", logo: "/images/Carrefour-logo.svg" },
      { name: "Carrefour Market", logo: "/images/Carrefour-Market-logo.svg" },
      { name: "Carrefour Express", logo: "/images/Carrefour-Express-logo.svg" },
      { name: "Carrefour Gourmet", logo: "/images/Carrefour-Gourmet-logo.svg" },
    ],
  },
  announcement:
    "Choississez votre magasin favori pour personnaliser votre expérience Carrefour et être toujours plus proche de vos envies",
  cities: ["Casablanca", "Tanger", "Rabat", "Fès", "Marrakech"],
  notice: "Pour vous tenirChoississez votre magasin favori pour personnaliser votre expérience Carrefour et être toujours plus proche de vos envies informé des nouveautés et promotions du moment",
  chooseButton: "Choisir",
  removeButton: "Retirer",
  moreInfo: "Plus d’informations",
  favoriteStore: "Votre magasin favori",
};
export default chooseMyStoreWording;
