import IMyProfileWording from './types'

const myProfileWording: IMyProfileWording = {
  title: "Mon profil",
  formTitle:"Complétez votre profil et gagnez 20 points !",
  gender: {
    label: "Civilité",
    values: {
      M: "M.",
      MME: "Mme.",
      MLLE: "Mlle.",
    },
  },
  firstName: {
    label: "Prénom *",
    requiredErrorMessage: "Veuillez remplir ce champ",
  },
  lastName: {
    label: "Nom *",
    requiredErrorMessage: "Veuillez remplir ce champ",
  },
  Email: {
    placeholder: "ex: ali.ali@mail.com",
    label: "Email",
  },
  BirthDate: {
    placeholder: "JJ/MM/AAAA",
    label: "Date de naissance",
    invalidDateMessage: "-18 ans erreur",
  },
  Address: {
    placeholder: "",
    label: "Adresse",
  },
  City: {
    placeholder: "",
    label: "Ville",
  },
  Profession:{
    placeholder: "",
    label: "Profession",
  },
  FamilySituation:{
    placeholder: "",
    label: "Situation marital",
  },
  KidsNumber:{
    placeholder: "",
    label: "Nombre d'enfants à charge",
  },

  submitBtnText: "Continuer",
}
export default myProfileWording;
