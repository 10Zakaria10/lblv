export const enum sigUnpFields {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  PASSWORD = "password",
  PASSWORD_CONFIRMATION = "passwordConfirmation",
  EMAIL = "email",
  BIRTH_DATE = "birthDate",
  GENDER = "gender",
  PHONE_NUMBER = "phoneNumber",
}

export interface IClientDto {
  firstName: string;
  lastName: string;
  password: string;
  gender: string;
  phoneNumber: string;
  email?: string | null;
  birthDate?: Date;
}
export interface ISignUpFields {
  [sigUnpFields.FIRST_NAME]: string;
  [sigUnpFields.LAST_NAME]: string;
  [sigUnpFields.PASSWORD]: string;
  [sigUnpFields.PASSWORD_CONFIRMATION]: string;
  [sigUnpFields.EMAIL]: string | null;
  [sigUnpFields.BIRTH_DATE]: Date | null;
  [sigUnpFields.GENDER]: string;
  [sigUnpFields.PHONE_NUMBER]: string;
}
