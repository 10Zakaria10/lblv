import { IGender } from "~types/gender";

interface IFormField {
  placeholder?: string;
  label: string;
  requiredErrorMessage?: string;
  toolTipMessage?: string;
}
interface IMyProfileWording {
  title: string;
  formTitle: string;
  gender: IGender
  firstName: IFormField;
  lastName: IFormField;
  Email: IFormField;
  Address: IFormField;
  City: IFormField;
  Profession: IFormField;
  FamilySituation: IFormField;
  KidsNumber: IFormField;

  BirthDate: IFormField & { invalidDateMessage: string };

  submitBtnText: string;

}

export default IMyProfileWording;
