import Image from "next/image";
import type { FC } from "react";
import Button from "~components/button";
import { ButtonType } from "~components/button/Button";
import { useDeviceSize } from "~utils/useDeviceSize";
import { StyledBannerCard } from "./BannerCard.style";

interface IBannerCard {
  iconUrl: string;
  buttonText: string;
  isButtonDisabled?: boolean;
  handleButtonClick?: () => void;
}

const BannerCard: FC<IBannerCard> = ({
  iconUrl,
  buttonText,
  isButtonDisabled,
  handleButtonClick,
}) => {
  const { down } = useDeviceSize();
  return down.laptop ? (
    <Button
      text={buttonText}
      buttonType={ButtonType.OUTLINED}
      disabled={isButtonDisabled}
      onClick={handleButtonClick}
    />
  ) : (
    <StyledBannerCard>
      <span>
        <Image src={iconUrl} width={65} height={66} />
      </span>
      <Button
        text={buttonText}
        buttonType={ButtonType.OUTLINED}
        disabled={isButtonDisabled}
        onClick={handleButtonClick}
      />
    </StyledBannerCard>
  );
};

export default BannerCard;
