import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { StyledFormContainer } from "~components/form/style";
import LbLogo from "~components/lbLogo";
import PageTitle from "~components/pageTitle";
import routes from "~components/Routes/routes";
import useFavStoreQuery from "~containers/chooseMyStore/hooks/useFavStoreQuery";
import { useDeviceSize } from "~utils/useDeviceSize";
import ChooseMainStore from "./components/chooseMainStore";
import {
  Description,
  GoToFidelitySpace,
  GoToFidelitySpaceWrapper,
  MainTitle,
  StyledForwardIcon,
} from "./Home.style";
import homeWording from "./wording";

interface IHome {}

const Home: FC<IHome> = ({}) => {
  const router = useRouter();
  const { up } = useDeviceSize();
  const [open, setOpen] = useState<boolean|null>(null);
  const {favoriteStore} = useFavStoreQuery();
  const redirectToMyStore = () => {
    setOpen(true);
  };
  const redirectToFidelitySpace = () => {
    router.push(routes.MY_SPACE);
  };
  useEffect(()=>{
    if (router.query.chooseStore === "true") {
      if(open === null){
        setOpen(true);
      }
    }else{
      if(favoriteStore){
        setOpen(false)
      }else{
        setOpen(open)
      }
    }
  },[favoriteStore])
  return (
    <StyledFormContainer>
      {up.mobile && <LbLogo imagePath="/images/Brand-logos.svg" />}
      <PageTitle>{homeWording.title}</PageTitle>
      <MainTitle>{homeWording.mainTitle} </MainTitle>
      <Description>{homeWording.description} </Description>
      <ChooseMainStore
        wording={homeWording.ChooseMainStore}
        handleClick={redirectToMyStore}
        isChooseMyStoreOpen={open??false}
        openChooseMyStore={setOpen}
      />
      <GoToFidelitySpaceWrapper>
        <GoToFidelitySpace onClick={redirectToFidelitySpace}>
          {homeWording.goToFidelitySpace}
          <StyledForwardIcon />
        </GoToFidelitySpace>
      </GoToFidelitySpaceWrapper>
    </StyledFormContainer>
  );
};

export default Home;
