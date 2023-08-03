import {
  IHeaderWording,
  IFidSpaceWording,
  IWelcomeBannerWording,
  IBalanceHistoryWording,
  IPointsActivityWording,
  IWelcomeBannerDetailsWording,
  ISettingsWording,
} from "./types";

const balanceHistoryWording: IBalanceHistoryWording = {
  blocTitle: "Historique d’achats",
  blocShowAll: "Tout afficher",
  storeTitleHeading: "Magasin",
  dateTitleHeading: "Date",
  totalAmountTitleHeading: "Total (dhs)",
  totalBalanceTitleHeading: "Total (points)",
  pointsText: "points",
  currency: "Dhs",
  placeholder: "Vous n'avez pas encore d'historique d'achat",
};

const productListWording = {
  blocTitle: "Produits Boost",
  blocDescription:
    "Gagnez encore plus de points grâce à la sélection Boost du moment",
  blocShowAll: "Tout afficher",
  points: "points",
  currency: "dhs",
};

export const headerWording: IHeaderWording = {
  bringo: "Bringo",
  clubCarrefour: "Club carrefour",
  home: "Acceuil",
  promotion: "Promotions",
  products: "Produits Carrefour",
  services: "Services",
};
export const settingsWording: ISettingsWording ={
  myAccount:"Mon Compte",
  deactivateNotifications: "Désactiver les notifications",
  activateNotifications: "Activer les notifications",
  logout:"Se déconnecter",
  deleteAccount:"Supprimer mon compte"
}

export const welcomeBannerDetailsWording: IWelcomeBannerDetailsWording = {
  title: "Bonjour",
  solde: "Votre solde : ",
  points: "points",
  info: "Vous devez avoir au moins 200 points pour générer un bon d’achat ou récupérer un code pin",
  profileCompletion: "Complétez votre profil et gagnez 20 points !",
};

export const welcomeBannerWording: IWelcomeBannerWording = {
  codePin: "Voir mon code PIN",
  coupon: "Convertir en bon d’achat",
  fidCard: "Ma carte fidélité",
  details: welcomeBannerDetailsWording,
  codePinTitle: "Mon code pin",
  codePinDesc: "Ce code unique est valable une fois si vous voulez utilisez votre solde en caisse"
};
export const pointsActivityWording: IPointsActivityWording = {
  title: "Activité",
  date: "Date",
  pointsText: "Points",
  solde: "Solde",
  blocTitle: "Activité de points",
  showAll: "Tout afficher",
  generateCoupon: "Bon d’achat généré",
  completeProfile: "Points de complétion de compte",
  welcome: "Offre de bienvenue",
  earnPoints: "Points gagnés à la caisse",
  placeholder: "Vous n'avez pas encore d'activité de points",
};

export const fidSpaceWording: IFidSpaceWording = {
  productList: productListWording,
  balanceHistory: balanceHistoryWording,
  welcomeBanner: welcomeBannerWording,
  pointsActivity: pointsActivityWording,
};
