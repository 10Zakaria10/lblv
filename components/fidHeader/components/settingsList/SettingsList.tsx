import { FC, useState } from "react";
import { IOSSwitch, SettingsItem, SettingsListWrapper } from "./SettingsList.style";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { settingsWording } from "~containers/fidSpace/wording";
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import useLogoutMutation from "./hooks/useLogoutMutation";
import useDeleteClientMutation from "./hooks/useDeleteClientMutation";
import Router from "next/router";
import { useLogoutHandler } from "~authentication/hooks";
import routes from "~components/Routes/routes";

interface ISettingsList{
  closeSettings: () => void;
}
const SettingsList: FC<ISettingsList> = ({closeSettings}) => {
  
  const [areNotificationsActivated, setNotificationActivated] = useState(true);
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationActivated(event.target.checked)
  }
  const {mutateAsync: logout} = useLogoutMutation();
  const {mutateAsync: deleteClient} = useDeleteClientMutation();
  const logoutHandler = useLogoutHandler();
  const handleDeleteAccount = async () => {
    await deleteClient();
    Router.push(routes.SIGN_IN);
  }
  const handleLogout = async () => {
    await logout();
    logoutHandler;
    Router.push(routes.SIGN_IN); 
  }
  const handleMyAccount = async () => {
    closeSettings();
    await Router.push(routes.SETTINGS); 
  }
  return (
    <SettingsListWrapper>
      <SettingsItem onClick={handleMyAccount}>
        <PermIdentityOutlinedIcon/>
        <div>
          {settingsWording.myAccount}
        </div>
        <ArrowForwardIosRoundedIcon/>
      </SettingsItem>
      <SettingsItem>
        {areNotificationsActivated ? 
          <>
            <NotificationsOffOutlinedIcon />
            <div>
              {settingsWording.deactivateNotifications}
            </div>
          </>
          :
          <>
            <NotificationsNoneOutlinedIcon />
            <div>
              {settingsWording.activateNotifications}
            </div>
          </>
       }
        
        <IOSSwitch checked={areNotificationsActivated} onChange={handleToggle}/>
      </SettingsItem>
      <SettingsItem onClick={handleLogout}>
        <LogoutRoundedIcon/>
        <div>
          {settingsWording.logout}
        </div>
      </SettingsItem>
      <SettingsItem onClick={handleDeleteAccount}>
        <ClearRoundedIcon/>
        <div>
          {settingsWording.deleteAccount}
        </div>
      </SettingsItem>
    </SettingsListWrapper>
  );
};

export default SettingsList;
