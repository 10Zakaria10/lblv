import { useDeviceSize } from "~utils/useDeviceSize";
import { BackToHomeLabel, BackToHomeWrapper, StyledIcon } from "./style";
export const BackToHome: React.FC = () => {
  const { up } = useDeviceSize();
  return (
    <BackToHomeWrapper>
      <StyledIcon />
      {up.mobile && <BackToHomeLabel>Retour au site</BackToHomeLabel>}
    </BackToHomeWrapper>
  );
};
