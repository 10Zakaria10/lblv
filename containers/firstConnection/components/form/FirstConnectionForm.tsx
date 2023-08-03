import React, { useEffect, useState } from "react";

import { ButtonWrapper, InputWrapper } from "~components/form/style";
import CustomTextField from "~components/inputs/TextField";
import PageTitle from "~components/pageTitle";
import routes from "~components/Routes/routes";
import { StyledSubmitButton } from "~components/submitButton/style";
import { useValidatePhoneMutation } from "~containers/firstConnection/hooks";
import firstConnectionWording from "~containers/firstConnection/wording/wording";

import { Form, MainTitle, SubTitle } from "./FirstConnectionForm.style";

import Router from "next/router";
import { useResendOtpMutation } from "~containers/hooks/otpPhone";

const FirstConnectionForm: React.FC = () => {
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
      verificationType: "FIRST_CONNECTION",
    });
    if (!isValid) {
      setShowError(true);
    } else {
      if (typeof window !== undefined) {
        localStorage.setItem("phoneNumber", phoneNumber);
      }
      resendOtpMutation(phoneNumber);
      Router.push(routes.FIRST_CONNECTION_OTP);
    }
  };

  return (
    <>
      <Form>
        <PageTitle>{firstConnectionWording.title}</PageTitle>
        <SubTitle>{firstConnectionWording.subTitle}</SubTitle>
        <MainTitle>{firstConnectionWording.mainTitle}</MainTitle>

        <InputWrapper>
          <CustomTextField
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            label={firstConnectionWording.phoneNumber}
            error={showError}
            errorMessage={firstConnectionWording.errorMessage}
          />
        </InputWrapper>

        <ButtonWrapper>
          <StyledSubmitButton
            loading={loading}
            type="button"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
          >
            {firstConnectionWording.submitButton}
          </StyledSubmitButton>
        </ButtonWrapper>
      </Form>
    </>
  );
};
export default FirstConnectionForm;
