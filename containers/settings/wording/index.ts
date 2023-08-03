import routes from "~components/Routes/routes";
import type ISettingsWording from "./types";

const settingsWording: ISettingsWording = {
  title: "Mon Compte",
  menuItems: [
    {
      lable: "Mon profil",
      redirectTo: routes.MY_PROFILE,
      imagePath: "/images/settings-user.svg",
    },
    {
      lable: "Mon mot de passe",
      redirectTo: routes.CHANGE_PASSWORD,
      imagePath: "/images/settings-password-update.svg",
    },
    {
      lable: "Magasin",
      redirectTo: "/home?chooseStore=true",
      imagePath: "/images/settings-magasin.svg",
    },
  ],
};
export default settingsWording;
