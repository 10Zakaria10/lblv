import React, { useEffect, useState } from "react";
import {
  FormCard,
  FormContainer,
  FormTitle,
  MyProfileContainer,
  MyProfileTitle,
} from "./MyProfile.style";
import myProfileWordingfrom from "./wording";
import LinearWithValueLabel from "./components/progressBar";
import useProfileCompletionPercentageQuery from "./hooks/useClientQuery";
import UpdateProfileForm from "./components/pupdatePofileForm";
import { useClientQuery } from "~containers/hooks/fidSpace";
import { Client } from "~containers/fidSpace/types";
interface IMyProfile {}

const MyProfile: React.FC<IMyProfile> = ({}) => {
  const wording = myProfileWordingfrom;
  const { percentage } = useProfileCompletionPercentageQuery();
  const { client: clientData } = useClientQuery();
  const [client, setClient] = useState<Client>()
  const [profileCompletion, setProfileCompletion] = useState<number>(0)
  useEffect(()=>{
    if(clientData){
      setClient(clientData)
  }},[clientData])
  useEffect(()=>{
    updateProfileCompletion()
  },[percentage])
  const updateProfileCompletion = () => {
    setProfileCompletion(profileCompletion+1)
  }
  return (
    <MyProfileContainer>
      <MyProfileTitle>{wording.title}</MyProfileTitle>
      <FormCard>
      <FormContainer>
        <FormTitle>{wording.formTitle}</FormTitle>
        <LinearWithValueLabel progress={percentage} />
        { client ? <UpdateProfileForm wording={wording} client={client} updateProfileCompletion={updateProfileCompletion}/> : "" }
      </FormContainer>
      </FormCard>
    </MyProfileContainer>
  );
};

export default MyProfile;
