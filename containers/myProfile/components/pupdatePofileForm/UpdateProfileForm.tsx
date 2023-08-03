import { FC, useEffect } from "react";
import {
  ButtonWrapper,
  InputWrapper,
  MyProfileFormContainer,
  StyledSubmitButton,
  StyledSelect,
  StyledSelectWrapper
} from "./UpdateProfileForm.style";
import CustomTextField from "~components/inputs/TextField";
import GenderRadioGroupBtn from "~components/genderRadioBtn/GenderRadioBtn";
import { Controller, useForm } from "react-hook-form";
import {
  FamilySituations,
  IProfileFields,
  profileFields,
} from "../../services/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { buildSchema } from "../../services/schema";
import React from "react";
import { useClientMutation } from "../../hooks";
import IMyProfileWording from "~containers/myProfile/wording/types";
import {

  MenuItem,
} from "@mui/material";
import useCityQuery from "~containers/myProfile/hooks/useCityQuery";
import { Client } from "~containers/fidSpace/types";

interface IUpdateProfileForm {
  wording: IMyProfileWording;
  client: Client;
  updateProfileCompletion: ()=>void;
}

const UpdateProfileForm: FC<IUpdateProfileForm> = ({ wording, client, updateProfileCompletion }) => {
  const { mutateAsync } = useClientMutation();
  const { cities } = useCityQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<IProfileFields>({
    resolver: yupResolver(buildSchema(wording)),
  });
  const submitForm = async (params: IProfileFields) => {
    await mutateAsync(params);
    setTimeout(()=>{
      updateProfileCompletion()
    },1000)
  };
  useEffect(()=>{
    if(client){
      reset(client)
    }
  },[client])
  return (
    <MyProfileFormContainer> 
      <form onSubmit={handleSubmit(submitForm)}>
        <InputWrapper>
          <Controller
          control={control}
          name={profileFields.GENDER}
          defaultValue={""}
          render = {()=>{
            return (<GenderRadioGroupBtn
              control={control}
              wording={wording.gender}
              name={profileFields.GENDER}
            />)
          }}
        />
          
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            id={profileFields.FIRST_NAME}
            register={register(profileFields.FIRST_NAME)}
            placeholder={wording.firstName.placeholder}
            label={wording.firstName.label}
            error={Boolean(errors[profileFields.FIRST_NAME]?.message)}
            errorMessage={wording.firstName.requiredErrorMessage}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            id={profileFields.LAST_NAME}
            register={register(profileFields.LAST_NAME)}
            placeholder={wording.lastName.placeholder}
            label={wording.lastName.label}
            error={Boolean(errors[profileFields.LAST_NAME]?.message)}
            errorMessage={wording.lastName.requiredErrorMessage}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            id={profileFields.EMAIL}
            register={register(profileFields.EMAIL)}
            placeholder={wording.Email.placeholder}
            label={wording.Email.label}
            error={Boolean(errors[profileFields.EMAIL]?.message)}
            errorMessage={wording.Email.requiredErrorMessage}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            id={profileFields.BIRTH_DATE}
            register={register(profileFields.BIRTH_DATE)}
            placeholder={wording.BirthDate.placeholder}
            label={wording.BirthDate.label}
            error={Boolean(errors[profileFields.BIRTH_DATE]?.message)}
            errorMessage={wording.BirthDate.requiredErrorMessage}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomTextField
            id={profileFields.ADDRESS}
            register={register(profileFields.ADDRESS)}
            placeholder={wording.Address.placeholder}
            label={wording.Address.label}
            error={Boolean(errors[profileFields.ADDRESS]?.message)}
            errorMessage={wording.Address.requiredErrorMessage}
          />
        </InputWrapper>
        <StyledSelectWrapper>
          <StyledSelect
            select
            fullWidth
            label={wording.City.label}
            defaultValue={client.city}
            inputProps={register(profileFields.CITY)}
            children={
              cities?.map((option) => {
              return (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>)
            })}
          />
        </StyledSelectWrapper>
        <InputWrapper>
          <CustomTextField
            id={profileFields.PROFESSION}
            register={register(profileFields.PROFESSION)}
            placeholder={wording.Profession.placeholder}
            label={wording.Profession.label}
            error={Boolean(errors[profileFields.PROFESSION]?.message)}
            errorMessage={wording.Profession.requiredErrorMessage}
          />
        </InputWrapper>
        <StyledSelectWrapper>
          <StyledSelect
            select
            fullWidth
            label={wording.FamilySituation.label}
            inputProps={register(profileFields.FAMILY_SITUATION)}
            defaultValue={client.familySituation}
            children={
              Object.entries(FamilySituations).map((entry) => (
              <MenuItem key={entry[0]} value={entry[0]}>
                {entry[1]}
              </MenuItem>
            ))}
          />
        </StyledSelectWrapper>
        <InputWrapper>
        <StyledSelect
          select
          fullWidth
          label={wording.KidsNumber.label}
          {...register(profileFields.KIDS_NUMBER)}
          defaultValue={client.numberOfKids}
          children={[0,1,2,3,4].map((elem) => (
            <MenuItem key={elem} value={elem}>
              {elem}
            </MenuItem>
          ))}
        />
        </InputWrapper>
        <ButtonWrapper>
          <StyledSubmitButton type="submit" fullWidth variant="contained">
            {wording.submitBtnText}
          </StyledSubmitButton>
        </ButtonWrapper>
      </form>
    </MyProfileFormContainer>
  );
};

export default UpdateProfileForm;
