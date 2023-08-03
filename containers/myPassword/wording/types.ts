interface IMyPasswordWording {
  title: string;
  subTitle:string;
  passwordRules:string[];
  confirmPassword:string;
  oldPassword:string;
  newPassword:string;
  changePasswordButton:string;
  passwordError:string;
  passwordConfirmationError:string;
}

export default IMyPasswordWording;
