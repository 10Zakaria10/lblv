import React, { useState } from "react";

import CustomTextField from "~components/inputs/TextField";
import GenderRadioGroupBtn from "~components/genderRadioBtn";
import { CGLabel } from "../labels/Labels";
import SignInBlock from "../signInBlock";
import PageTitle from "~components/pageTitle";

import FormControlLabel from "@mui/material/FormControlLabel";
import Router from "next/router";
import { useForm } from "react-hook-form";
import routes from "~components/Routes/routes";
import { StyledSubmitButton } from "~components/submitButton/style";
import { ISignUpFields, sigUnpFields } from "~containers/signup/types";
import { useClientMutation } from "~containers/signup/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { buildSchema } from "~containers/signup/services/schema";
import { getPhoneNumberWithSpaces } from "~containers/signup/services/utils";
import {
  ButtonWrapper,
  CheckboxIcon,
  Form,
  InputWrapper,
} from "~components/form/style";
import ISignUpWording from "~containers/signup/wording/types";
import DatePicker from "../datePicker/DatePicker";
interface ISignUpForm {
  wording: ISignUpWording;
}

const SignUpForm: React.FC<ISignUpForm> = ({ wording }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<ISignUpFields>({
    resolver: yupResolver(buildSchema(wording)),
    defaultValues: {
      birthDate: null,
      email: null,
    },
  });

  const { phoneNumber } = watch();
  const [toCheck, setToCheck] = useState<boolean>(false);
  const { mutateAsync } = useClientMutation();

  const submitForm = async (params: ISignUpFields) => {
    await mutateAsync(params);
    Router.push(routes.OTP);
  };
  const redirectToSignInPage = () => {
    Router.push(routes.SIGN_IN);
  };

  const onChangePhoneNumber = (
    event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let enteredValue = event?.target.value || "";
    const phoneWithSpace = getPhoneNumberWithSpaces(phoneNumber, enteredValue);
    setValue(sigUnpFields.PHONE_NUMBER, phoneWithSpace, {
      shouldValidate: true,
    });
  };

  const handleToCheckChange = () => {
    setToCheck(!toCheck);
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <PageTitle>{wording.title}</PageTitle>
      <InputWrapper>
        <CustomTextField
          id={sigUnpFields.PHONE_NUMBER}
          register={register(sigUnpFields.PHONE_NUMBER)}
          placeholder={wording.phoneNumber.placeholder}
          label={wording.phoneNumber.label}
          error={Boolean(errors[sigUnpFields.PHONE_NUMBER]?.message)}
          errorMessage={errors.phoneNumber?.message}
          onChange={onChangePhoneNumber}
        />
      </InputWrapper>
      <InputWrapper>
        <GenderRadioGroupBtn control={control} wording={wording.gender} name={sigUnpFields.GENDER}/>
      </InputWrapper>
      <InputWrapper>
        <CustomTextField
          id={sigUnpFields.FIRST_NAME}
          register={register(sigUnpFields.FIRST_NAME)}
          placeholder={wording.firstName.placeholder}
          label={wording.firstName.label}
          error={Boolean(errors[sigUnpFields.FIRST_NAME]?.message)}
          errorMessage={wording.firstName.requiredErrorMessage}
        />
      </InputWrapper>
      <InputWrapper>
        <CustomTextField
          id={sigUnpFields.LAST_NAME}
          register={register(sigUnpFields.LAST_NAME)}
          placeholder={wording.lastName.placeholder}
          label={wording.lastName.label}
          error={Boolean(errors[sigUnpFields.LAST_NAME]?.message)}
          errorMessage={wording.lastName.requiredErrorMessage}
        />
      </InputWrapper>
      <InputWrapper>
        <CustomTextField
          id={sigUnpFields.PASSWORD}
          register={register(sigUnpFields.PASSWORD)}
          placeholder={wording.password.placeholder}
          label={wording.password.label}
          error={Boolean(errors[sigUnpFields.PASSWORD]?.message)}
          inputType="password"
          toolTipMessage={wording.password.toolTipMessage}
          errorMessage={errors.password?.message}
        />
      </InputWrapper>
      <InputWrapper>
        <CustomTextField
          id={sigUnpFields.PASSWORD_CONFIRMATION}
          register={register(sigUnpFields.PASSWORD_CONFIRMATION)}
          placeholder={wording.passwordConfirmation.placeholder}
          label={wording.passwordConfirmation.label}
          error={Boolean(errors[sigUnpFields.PASSWORD_CONFIRMATION]?.message)}
          inputType="password"
          errorMessage={wording.passwordConfirmation.requiredErrorMessage}
        />
      </InputWrapper>
      <InputWrapper>
        <CustomTextField
          id={sigUnpFields.EMAIL}
          register={register(sigUnpFields.EMAIL)}
          placeholder={wording.Email.placeholder}
          label={wording.Email.label}
          error={Boolean(errors[sigUnpFields.EMAIL]?.message)}
        />
      </InputWrapper>
      <InputWrapper>
        <DatePicker
          control={control}
          placeholder={wording.BirthDate.placeholder}
          label={wording.BirthDate.label}
          error={Boolean(errors[sigUnpFields.BIRTH_DATE]?.message)}
          errorMessage={errors.birthDate?.message}
        />
      </InputWrapper>
      <InputWrapper>
        <FormControlLabel
          control={
            <CheckboxIcon checked={toCheck} onChange={handleToCheckChange} />
          }
          label={
            <CGLabel
              firstText={wording.GC.firstText}
              linkText={wording.GC.linkText}
              endText={wording.GC.endText}
            />
          }
        />
      </InputWrapper>
      <ButtonWrapper>
        <StyledSubmitButton
          disabled={!toCheck}
          type="submit"
          fullWidth
          variant="contained"
        >
          {wording.submitBtnText}
        </StyledSubmitButton>
      </ButtonWrapper>
      <SignInBlock onClick={redirectToSignInPage} wording={wording} />
    </Form>
  );
};
export default SignUpForm;
