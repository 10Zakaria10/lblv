import React, { useEffect, useState } from "react";

import { ButtonWrapper, InputWrapper } from "~components/form/style";
import CustomTextField from "~components/inputs/TextField";
import PageTitle from "~components/pageTitle";
import routes from "~components/Routes/routes";
import { StyledSubmitButton } from "~components/submitButton/style";
import { useSetPasswordMutation } from "~containers/firstConnectionSetPassword/hooks";
import { isPasswordValid } from "~containers/firstConnectionSetPassword/services/firstConnection.service";
import setPasswordWording from "~containers/firstConnectionSetPassword/wording/wording";
import Router from "next/router";

import { Form, ListItem, SubTitle } from "./FirstConnectionForm.style";

const FirstConnectionSetPasswordForm: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [showPasswordError, setShowPasswordError] =
    React.useState<boolean>(false);
  const [showPasswordConfirmationError, setShowPasswordConfirmationError] =
    React.useState<boolean>(false);
  const { mutateAsync: updatePassword, loading } = useSetPasswordMutation();

  const handlePasswordConfirmationChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
  ) => {
    setPasswordConfirmation(event?.target.value ?? "");
  };

  const handlePasswordChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
  ) => {
    setPassword(event?.target.value ?? "");
  };

  useEffect(() => {
    if (showPasswordError) {
      setShowPasswordError(false);
    }
  }, [password, passwordConfirmation]);

  useEffect(() => {
    if (showPasswordConfirmationError) {
      setShowPasswordConfirmationError(false);
    }
  }, [passwordConfirmation]);

  const handleSubmit = async () => {
    if (isPasswordValid(password)) {
      if (password === passwordConfirmation) {
        await updatePassword(password);
        Router.push(routes.SIGN_IN);
      } else {
        setShowPasswordConfirmationError(true);
      }
    } else {
      setShowPasswordError(true);
    }
  };

  return (
    <>
      <Form>
        <PageTitle>{setPasswordWording.title}</PageTitle>
        <SubTitle>{setPasswordWording.subTitle}</SubTitle>
        <ul>
          {setPasswordWording.passwordRules.map((label) => (
            <ListItem>{label}</ListItem>
          ))}
        </ul>
        <InputWrapper>
          <CustomTextField
            value={password}
            onChange={handlePasswordChange}
            label={setPasswordWording.password}
            inputType="password"
            error={showPasswordError}
            errorMessage={setPasswordWording.passwordError}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            label={setPasswordWording.passwordConfirmation}
            inputType="password"
            error={showPasswordConfirmationError}
            errorMessage={setPasswordWording.passwordConfirmationError}
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
            {setPasswordWording.submitButton}
          </StyledSubmitButton>
        </ButtonWrapper>
      </Form>
    </>
  );
};
export default FirstConnectionSetPasswordForm;
