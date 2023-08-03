import Link from "next/link";
import React, { useState } from "react";
import CustomTextField from "~components/inputs/TextField";
import PageTitle from "~components/pageTitle";
import routes from "~components/Routes/routes";
import { StyledSubmitButton } from "~components/submitButton/style";
import signInWording from "~containers/signin/wording/wording";
import { StyledFormControlLabel } from "~components/genderRadioBtn/styles";
import { ButtonWrapper, CheckboxIcon, InputWrapper } from "~components/form/style";
import {
  SubTitle,
  FirstTimeLoginButton,
  FirstTimeLoginContainer,
  StyledParagraph,
  Form,
  SessionInformationContainer,
  BackToSignUpContainer,
  StyledLink,
} from "./SignInForm.style";
import { useLoginMutation } from "~containers/signin/hooks";
import Router from "next/router";

const SignInForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutateAsync: authenticate, loading } = useLoginMutation();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
    setUsername(event?.target.value || "");
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
    setPassword(event?.target.value || "");
  };

  const handleSubmit = async () => {
    await authenticate({ username, password });
    Router.push(routes.HOME);
  };
  const handleFirstTime = () => {
    Router.push(routes.FIRST_CONNECTION);
  };
  return (
    <>
      <Form>
        <PageTitle>{signInWording.title}</PageTitle>
        <SubTitle>{signInWording.subTitle}</SubTitle>

        <InputWrapper>
          <CustomTextField value={username} onChange={handleUsernameChange} label={signInWording.login} />
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            value={password}
            onChange={handlePasswordChange}
            type="password"
            label={signInWording.password}
          />
        </InputWrapper>

        <SessionInformationContainer>
          <StyledFormControlLabel control={<CheckboxIcon />} label={signInWording.stayConnected} />
          <Link prefetch href={routes.FORGOTTEN_PASSWORD} passHref>
            <StyledLink>{signInWording.forgetPassword}</StyledLink>
          </Link>
        </SessionInformationContainer>

        <ButtonWrapper>
          <StyledSubmitButton
            loading={loading}
            type="button"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
          >
            {signInWording.signIn}
          </StyledSubmitButton>
        </ButtonWrapper>
      </Form>

      <FirstTimeLoginContainer>
        <StyledParagraph>{signInWording.alreadyRegistred}</StyledParagraph>
        <FirstTimeLoginButton fullWidth onClick={handleFirstTime}>
          <span>{signInWording.loginForFirstTime}</span>
        </FirstTimeLoginButton>
      </FirstTimeLoginContainer>

      <BackToSignUpContainer>
        <StyledParagraph>{signInWording.notRegisted}</StyledParagraph>
        <Link prefetch href={routes.SIGN_UP} passHref>
          <StyledLink>{signInWording.signUp}</StyledLink>
        </Link>
      </BackToSignUpContainer>
    </>
  );
};
export default SignInForm;
