import { SettingsOutlined } from "@mui/icons-material";
import { FC, useState } from "react";
import { StyledTooltip } from "~components/fidHeader/FidHeader.style";
import SettingsList from "../settingsList";
import { SettingsWrapper } from "./SettingsIcon.style";


const SettingsIcon: FC = () => {

  const [isSettingsOpen, setSettingsOpen] = useState<boolean>(false)
  const handleSettingsButtonClick = () => {
    setSettingsOpen(!isSettingsOpen);
  };
  const closeSetting = () => {
    setSettingsOpen(false);
  }
  const getSettingsClassName = (isOpen:boolean) => {
    return isOpen ? "open":"closed"
  }
  return (
    <StyledTooltip
      PopperProps={{
        disablePortal: true,
      }}
      open={isSettingsOpen}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title={<SettingsList closeSettings={closeSetting}/>}
      arrow
    >
      <SettingsWrapper className={getSettingsClassName(isSettingsOpen)}>
        <SettingsOutlined onClick={handleSettingsButtonClick} />
      </SettingsWrapper>
    </StyledTooltip>
  );
};

export default SettingsIcon;
