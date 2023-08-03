import ISignUpWording from "./types";

const signUpWording: ISignUpWording = {
  title: "Créer mon compte",
  phoneNumber: {
    placeholder: "+212 6(7) 00 00 00 00",
    label: "Numéro de téléphone portable *",
    invalidErrorMessage: "Format invalide",
    requiredErrorMessage: "Veuillez remplir ce champ",
    customizedErrorMessage: "Numéro de téléphone doit contenir 8 chiffres aprés le prefix",
  },
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
  password: {
    label: "Password *",
    requiredErrorMessage: "Veuillez remplir ce champ",
    invalidErrorMessage: "Mot de passe invalide",
    customizedErrorMessage: "",
    toolTipMessage:
      "Le mot de passe doit comporter au moins 8 caractères et inclure 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial",
  },
  passwordConfirmation: {
    label: "Confirmation du mot de passe *",
    requiredErrorMessage: "Les mots de passe doivent correspondre",
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
  GC: {
    firstText: "J'accepte",
    linkText: "les termes et conditions",
    endText: "de LabelVie",
  },
  submitBtnText: "Sign In",
  signInBlock: {
    label: "Vous avez déjà un compte ?",
    SignInBtnText: "Connecté vous",
  },
};

export default signUpWording;
