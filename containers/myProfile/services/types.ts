export const enum profileFields {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  BIRTH_DATE = "birthDate",
  GENDER = "gender",
  ADDRESS = "address",
  CITY = "city",
  PROFESSION = "profession",
  FAMILY_SITUATION = "familySituation",
  KIDS_NUMBER = "numberOfKids",
}
export interface IProfileFields {
  [profileFields.FIRST_NAME]: string;
  [profileFields.LAST_NAME]: string;
  [profileFields.EMAIL]: string | null;
  [profileFields.BIRTH_DATE]: Date | null;
  [profileFields.GENDER]: string;
  [profileFields.ADDRESS]: string;
  [profileFields.CITY]: string;
  [profileFields.PROFESSION]: string;
  [profileFields.FAMILY_SITUATION]: FamilySituationEnum;
  [profileFields.KIDS_NUMBER]: number;
}
export enum FamilySituationEnum {
  MARRIED = "MARRIED",
  SINGLE = "SINGLE",
  DIVORCED = "DIVORCED",
  WIDOW = "WIDOW",
}

export const FamilySituations = {
  [FamilySituationEnum.DIVORCED]: "Divorcé(é)",
  [FamilySituationEnum.MARRIED]: "Marié(e)",
  [FamilySituationEnum.SINGLE]: "Célibataire",
  [FamilySituationEnum.WIDOW]: "Veuf(ve)",
};

export interface IClientDto {
  firstName: string;
  lastName: string;
  gender: string;
  email?: string | null;
  birthDate?: Date;
  address: string;
  city: string;
  profession: string;
  familySituation: FamilySituationEnum;
  kidsNimber: number;
}
