import React, { useEffect, useState } from "react";

import { ButtonWrapper, InputWrapper, LoginButtonWrapper } from "~components/form/style";
import CustomTextField from "~components/inputs/TextField";
import PageTitle from "~components/pageTitle";
import routes from "~components/Routes/routes";
import { StyledSubmitButton } from "~components/submitButton/style";
import { useValidatePhoneMutation } from "~containers/forgottenPassword/hooks";
import ForgottenPasswordWording from "~containers/forgottenPassword/wording/wording";

import { Form, MainTitle, SubTitle } from "./ForgottenPasswordForm.style";

import Router from "next/router";
import { useResendOtpMutation } from "~containers/hooks/otpPhone";
import Button from "~components/button";
import { ButtonType } from "~components/button/Button";

const ForgottenPasswordForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showError, setShowError] = React.useState<boolean>(false);
  const { mutateAsync: validatePhone, loading } = useValidatePhoneMutation();
  const { mutate: resendOtpMutation } = useResendOtpMutation();

  const handlePhoneNumberChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
  ) => {
    setPhoneNumber(event?.target.value ?? "");
  };

  useEffect(() => {
    if (showError) {
      setShowError(false);
    }
  }, [phoneNumber]);

  const handleSubmit = async () => {
    const isValid = await validatePhone({
      phoneNumber,
      verificationType: "RESET",
    });
    if (!isValid) {
      setShowError(true);
    } else {
      if (typeof window !== undefined) {
        localStorage.setItem("phoneNumber", phoneNumber);
      }
      resendOtpMutation(phoneNumber);
      Router.push(routes.FORGOTTEN_PASSWORD_OTP);
    }
  };
  const handleLoginClick = () => {
    Router.push(routes.SIGN_IN);
  }
  return (
    <>
      <Form>
        <PageTitle>{ForgottenPasswordWording.title}</PageTitle>
        <SubTitle>{ForgottenPasswordWording.subTitle}</SubTitle>
        <InputWrapper>
          <CustomTextField
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            label={ForgottenPasswordWording.phoneNumber}
            error={showError}
            errorMessage={ForgottenPasswordWording.errorMessage}
          />
        </InputWrapper>

        <ButtonWrapper>
          <StyledSubmitButton
            loading={loading}
            type="button"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            disabled={phoneNumber!==""?false:true}
          >
            {ForgottenPasswordWording.submitButton}
          </StyledSubmitButton>
        </ButtonWrapper>
      </Form>
      <LoginButtonWrapper>
        <Button
          text={ForgottenPasswordWording.loginButton}
          buttonType={ButtonType.OUTLINED}
          onClick={handleLoginClick}
        />
      </LoginButtonWrapper>
    </>
  );
};
export default ForgottenPasswordForm;
