import React, { FC } from "react";
import { StyledSubmitButton } from "~components/submitButton/style";
import ISignUpOtpWording from "~containers/signUpOtp/wording/types";
import { Description } from "../labels/labels";

import {
  AttemptCount,
  AttemptCountLabel,
  ElementWrapper,
  FormWrapper,
  TypographyBold,
  TypographyBoldWrapper,
} from "./style";
import { OtpInputWrapper } from "../otpInput/style";
import InputOtp from "../otpInput";
import Router from "next/router";
import ResendOtp from "../resendOtp";
import PageTitle from "~components/pageTitle";
import { IOtpDto } from "~containers/services/otpPhone/types";
import { isOTPValid } from "~containers/services/otpPhone/utils";
import { useValidateOtpMutation } from "~containers/hooks/otpPhone";

interface IForm {
  wording: ISignUpOtpWording;
  otp: string;
  setOtp: (value: string) => void;
  otpInfos: IOtpDto;
  phoneNumber: string;
  redirectionUrl:string;
}

const Form: FC<IForm> = ({
  wording,
  otp,
  setOtp,
  otpInfos: {
    attemptsLeft,
    secondsLeftFromExpiration,
    generatedAt,
    generationLeft,
  },
  phoneNumber,
  redirectionUrl,
}) => {
  const { mutateAsync: validateOtpMutation } = useValidateOtpMutation();
  const [isOTPCodeValid, setOTPCodeValidationValue] =
    React.useState<boolean>(true);
  const [showError, setShowError] = React.useState<boolean>(false);

  React.useEffect(() => {
    setOTPCodeValidationValue(isOTPValid(otp));
  }, [otp]);

  React.useEffect(() => {
    setShowError(false);
    setOTPCodeValidationValue(true);
  }, [generatedAt]);

  const hasAttemptsLeft = (): boolean => {
    return attemptsLeft > 0;
  };

  const handleSubmit = async () => {
    if (isOTPCodeValid && hasAttemptsLeft()) {
      const isValid = await validateOtpMutation({
        otp,
        phoneNumber,
      });
      if (!isValid) {
        setShowError(true);
      } else Router.push(redirectionUrl);
    }
  };

  const canShowAttemptsLeft = otp.length === 0;

  return (
    <FormWrapper>
      <PageTitle>{wording.title}</PageTitle>
      <Description
        initialText={wording.descriptionInitialText}
        phoneNumber={phoneNumber}
        endText={wording.descriptionEndText}
      ></Description>
      <OtpInputWrapper>
        <InputOtp
          otp={otp}
          attemptsCount={attemptsLeft}
          handleOnChange={setOtp}
          isOTPCodeValid={isOTPCodeValid}
          showErrorMessage={showError}
        />
      </OtpInputWrapper>
      {canShowAttemptsLeft && (
        <ElementWrapper>
          <AttemptCountLabel>
            <AttemptCount>{attemptsLeft}</AttemptCount>
            {wording.attemptsCount}
          </AttemptCountLabel>
        </ElementWrapper>
      )}
      <StyledSubmitButton
        disabled={!hasAttemptsLeft()}
        type="submit"
        fullWidth
        variant="contained"
        onClick={handleSubmit}
      >
        {wording.submit}
      </StyledSubmitButton>
      <TypographyBoldWrapper>
        <TypographyBold>{wording.otpNotReceived}</TypographyBold>
      </TypographyBoldWrapper>
      <ResendOtp
        phoneNumber={phoneNumber}
        wording={wording}
        generatedAt={generatedAt}
        secondsLeft={secondsLeftFromExpiration}
        generationLeft={generationLeft}
      />
    </FormWrapper>
  );
};
export default Form;
