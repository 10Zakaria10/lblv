import { FamilySituationEnum } from "~containers/myProfile/services/types";

export interface Client {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  email: string;
  birthDate: Date;
  address: string;
  city: string;
  profession: string;
  familySituation: FamilySituationEnum;
  numberOfKids: number;
  isComplete: boolean;
}

export interface Wallet {
  balance: number;
  pinCode: string;
  cardCode: string;
}
