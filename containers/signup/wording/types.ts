import { IGenderValues } from "~types/gender";

interface IFormField {
  placeholder?: string;
  label: string;
  requiredErrorMessage?: string;
  toolTipMessage?: string;
}
interface IFormFieldWithCustomErrorMessages extends IFormField {
  invalidErrorMessage: string;
  customizedErrorMessage: string;
}

interface ISignUpWording {
  title: string;
  phoneNumber: IFormFieldWithCustomErrorMessages;
  gender: {
    label: string;
    values: IGenderValues
  };
  firstName: IFormField;
  lastName: IFormField;
  password: IFormFieldWithCustomErrorMessages;
  passwordConfirmation: IFormField;
  Email: IFormField;
  BirthDate: IFormField & { invalidDateMessage: string };
  GC: {
    firstText: string;
    linkText: string;
    endText: string;
  };
  submitBtnText: string;
  signInBlock: {
    label: string;
    SignInBtnText: string;
  };
}
export default ISignUpWording;
