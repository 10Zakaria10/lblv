import { GenderEnum } from "../../../components/genderRadioBtn/GenderRadioBtn";

import * as yup from "yup";
import { sigUnpFields } from "../types";
import { getLengthOfPrefix, removeWhiteSpace, startWithOneOf } from "./utils";
import ISignUpWording from "../wording/types";

const schemaStaticShape = (wording: ISignUpWording) => ({
  [sigUnpFields.FIRST_NAME]: yup.string().min(3).required(),
  [sigUnpFields.LAST_NAME]: yup.string().min(3).required(),
  [sigUnpFields.BIRTH_DATE]: yup.date().nullable().max(getMaxDate(), wording.BirthDate.invalidDateMessage),
  [sigUnpFields.PASSWORD]: yup
    .string()
    .required(wording.password.requiredErrorMessage)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      wording.password.invalidErrorMessage,
    ),
  [sigUnpFields.PASSWORD_CONFIRMATION]: yup.string().oneOf([yup.ref(sigUnpFields.PASSWORD), null]),
  [sigUnpFields.GENDER]: yup.mixed<GenderEnum>().oneOf(Object.values(GenderEnum)),
  [sigUnpFields.PHONE_NUMBER]: yup
    .string()
    .required(wording.phoneNumber.requiredErrorMessage)
    .test("prefix_validation", wording.phoneNumber.invalidErrorMessage, (phoneNumber?: string) =>
      prefixValidation(phoneNumber),
    )
    .test("restOfNumbers_validation", wording.phoneNumber.customizedErrorMessage, (phoneNumber?: string) =>
      restOfNumbersValidation(phoneNumber),
    ),
});

const prefixValidation = (phoneNumber?: string): boolean => {
  const value = removeWhiteSpace(phoneNumber);
  return startWithOneOf(value);
};

const restOfNumbersValidation = (phoneNumber?: string): boolean => {
  const value = removeWhiteSpace(phoneNumber);
  const restOfNumbers = value?.substring(getLengthOfPrefix(value));
  return restOfNumbers?.length == 8;
};

const getMaxDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date;
};

export const buildSchema = (wording: ISignUpWording) => {
  return yup.object().shape({
    ...schemaStaticShape(wording),
  });
};
