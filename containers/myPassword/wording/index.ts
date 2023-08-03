import IMyPasswordWording from './types'

const myPasswordWording: IMyPasswordWording = {
  title: "Mon mot de passe",
  subTitle:
    "Votre mot de passe doit contenir au minimum 8 caractères, à savoir :",
  passwordRules: ["Une lettre majuscule", "Un caractère spécial et un chiffre"],
  oldPassword: "Ancien mot de passe *",
  newPassword: "Nouveau mot de passe *",
  confirmPassword: "Confirmer mot de passe *",
  changePasswordButton:"Réinitialiser mon mot de passe",
  passwordError:"Mot de passe invalide",
  passwordConfirmationError:"Les mots de passe doivent correspondre",
}
export default myPasswordWording;
