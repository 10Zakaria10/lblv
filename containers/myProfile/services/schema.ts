
import * as yup from "yup";
import { profileFields } from "./types";
import IMyProfileWording from "../wording/types";

const schemaStaticShape = (wording: IMyProfileWording) => ({
  [profileFields.FIRST_NAME]: yup.string().min(3).required(),
  [profileFields.LAST_NAME]: yup.string().min(3).required(),
  [profileFields.BIRTH_DATE]: yup.date().nullable().max(getMaxDate(), wording.BirthDate.invalidDateMessage),
  [profileFields.EMAIL]: yup
    .string().nullable()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      wording.Email.requiredErrorMessage,
    ),
});


const getMaxDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date;
};

export const buildSchema = (wording: IMyProfileWording) => {
  return yup.object().shape({
    ...schemaStaticShape(wording),
  });
};
