import IPasswordChangeOtpWording from "./types";

const passwordChangeOtpWording: IPasswordChangeOtpWording = {
  title: "Confirmer votre identité",
  imageUrl: "/images/Slide-carrefour-marché-gourmant.svg",
  descriptionInitialText: "Indiquez le code envoyé par SMS au ",
  descriptionEndText: ". Le code reçu est valide pendant 3 minutes.",
  submit: "Confirmer",
  otpNotReceived: "Vous n’avez pas reçu le code envoyé par SMS ?",
  otpCodeTimer: "Vous pouvez recevoir un nouveau code dans ",
  timeUnit: " minutes.",
  resendOtp: "Renvoyer le code par sms",
  attemptsCount: " tentatives restantes",
  clientService: "Contactez le service client",
  or: "ou",
};
export default passwordChangeOtpWording;
