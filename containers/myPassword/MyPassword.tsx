import { FC, useEffect, useState } from "react";
import { InputWrapper, ListItem, MyPasswordContainer, MyPasswordForm, MyPasswordFormContainer, MyPasswordTitle, PasswordRulesContainer, SubTitle } from "./MyPassword.style";
import myPasswordWording from "./wording";
import CustomTextField from "~components/inputs/TextField";
import Button from "~components/button";
import Router from "next/router";
import routes from "~components/Routes/routes";
import { isPasswordValid } from "./services/myPassword.service";
import { useUpdatePasswordMutation } from "./hooks";

interface IMyPassword {}

const MyPassword: FC<IMyPassword> = ({}) => {
  const wording = myPasswordWording;
  const [password, setPassword] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [showPasswordError, setShowPasswordError] = useState<boolean>(false);
  const [showOldPasswordError, setShowOldPasswordError] = useState<boolean>(false);
  const [showPasswordConfirmationError, setShowPasswordConfirmationError] = useState<boolean>(false);
  const { mutateAsync: updatePassword, loading } = useUpdatePasswordMutation();

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
  const handleOldPasswordChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
  ) => {
    setOldPassword(event?.target.value ?? "");
  };

  useEffect(() => {
    if (showOldPasswordError) {
      setShowOldPasswordError(false);
    }
  }, [oldPassword, password, passwordConfirmation]);
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

  const reset = () => {
    setOldPassword("");
    setPassword("");
    setPasswordConfirmation("");
    setShowPasswordConfirmationError(false);
    setShowPasswordError(false);
    setShowOldPasswordError(false);
  }
  const handleSubmit = async () => {
    if(isPasswordValid(oldPassword)){
      if (isPasswordValid(password)) {
        if (password === passwordConfirmation) {
          await updatePassword({
            oldPassword: oldPassword,
            newPassword: password
          });
          reset()
        } else {
          setShowPasswordConfirmationError(true);
        }
      } else {
        setShowPasswordError(true);
      }
    }else{
      setShowOldPasswordError(true);
    }
  };
  return (
  <MyPasswordContainer>
    <MyPasswordTitle>{wording.title}</MyPasswordTitle>
    <MyPasswordFormContainer>
      <PasswordRulesContainer>
        <SubTitle>{wording.subTitle}</SubTitle>
          <ul>
            {wording.passwordRules.map((label) => (
              <ListItem>{label}</ListItem>
            ))}
          </ul>
      </PasswordRulesContainer>
      <MyPasswordForm>
        <InputWrapper>
          <CustomTextField
            value={oldPassword}
            onChange={handleOldPasswordChange}
            error={showOldPasswordError}
            errorMessage={wording.passwordError}
            type="password"
            label={wording.oldPassword}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            value={password}
            onChange={handlePasswordChange}
            error={showPasswordError}
            errorMessage={wording.passwordError}
            type="password"
            label={wording.newPassword}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            error={showPasswordConfirmationError}
            errorMessage={wording.passwordConfirmationError}
            type="password"
            label={wording.confirmPassword}
          />
        </InputWrapper>
        <InputWrapper>
          <Button
            text={wording.changePasswordButton}
            onClick={handleSubmit}
          />
        </InputWrapper>
      </MyPasswordForm>
    </MyPasswordFormContainer>
    
  </MyPasswordContainer>
  );
};

export default MyPassword;
