import React from "react";
import ChooseMyStore from "~containers/chooseMyStore";
import { IChooseMainStoreWording } from "~containers/home/wording/types";
import {
  ChooseMainStoreBackground,
  ChooseStoreBtn,
  Description,
  SpaceWrapper,
  StoreIcon,
  Title,
} from "./ChooseMainStore.style";

interface IChooseMainStore {
  wording: IChooseMainStoreWording;
  handleClick: () => void;
  isChooseMyStoreOpen: boolean;
  openChooseMyStore: (value: boolean) => void;
}

const ChooseMainStore: React.FC<IChooseMainStore> = ({
  wording,
  handleClick,
  isChooseMyStoreOpen,
  openChooseMyStore,
}) => {
  return (
    <ChooseMainStoreBackground>
      <Title>
        <StoreIcon />
        {wording.title}
      </Title>
      <SpaceWrapper>
        <Description> {wording.description}</Description>
      </SpaceWrapper>
      <SpaceWrapper>
        <ChooseStoreBtn onClick={handleClick}> {wording.buttonTitle}</ChooseStoreBtn>
      </SpaceWrapper>
      <ChooseMyStore isChooseMyStoreOpen={isChooseMyStoreOpen} openChooseMyStore={openChooseMyStore} />
    </ChooseMainStoreBackground>
  );
};

export default ChooseMainStore;
