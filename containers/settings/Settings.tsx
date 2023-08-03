import Image from "next/image";
import type { FC } from "react";
import {
  SettingsContainer,
  SettingsMenuCard,
  SettingsMenuCardContainer,
  SettingsTitle,
} from "./Settings.style";
import settingsWording from "./wording";
import { useRouter } from "next/router";

interface ISettings {}

const Settings: FC<ISettings> = ({}) => {
  const wording = settingsWording;
  const router = useRouter();
  const handleCardClick  = (
    path : string,
  ) => {
    router.push(path);
  };
  return (
    <SettingsContainer>
      <SettingsTitle>{wording.title}</SettingsTitle>
      <SettingsMenuCardContainer>
        {wording.menuItems.map((item) => (
          <SettingsMenuCard onClick={()=> handleCardClick(item.redirectTo)} id={item.redirectTo}>
            <span>
              <Image src={item.imagePath} width={24} height={24} />
            </span>
            {item.lable}
          </SettingsMenuCard>
        ))}
      </SettingsMenuCardContainer>
    </SettingsContainer>
  );
};

export default Settings;
