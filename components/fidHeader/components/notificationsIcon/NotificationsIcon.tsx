import {  NotificationsOutlined } from "@mui/icons-material";
import { FC, useEffect, useState} from "react";
import { Bullet, StyledTooltip } from "~components/fidHeader/FidHeader.style";
import useGetNotificationsQuery from "../notifications/hooks/useGetNotifications";
import NotificationsList from "../notifications/notificationsList";
import { getUnseenNotifications } from "../notifications/services/notifications.service";
import { NotificationWrapper} from "./NotificationsIcon.style";

const NotificationsIcon: FC= () => {

  const [openNotification, setOpenNotification] = useState<boolean>(false)
  const [hasNewNotifications, setHasNewNotifications]= useState<boolean | null>(null);
  const {loading, notifications} = useGetNotificationsQuery("get notifications");
  if(!loading && hasNewNotifications === null){
    setHasNewNotifications(getUnseenNotifications(notifications??[]).length > 0)
  }
  useEffect(()=>{
    setHasNewNotifications(getUnseenNotifications(notifications??[]).length > 0)
  },[notifications])

  const handleNotificationButtonClick = () => {
    setOpenNotification(!openNotification);
  };
  return(
    <StyledTooltip
      PopperProps={{
        disablePortal: true,
      }}
      open={openNotification}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title={<NotificationsList notifications={getUnseenNotifications(notifications??[])}/>}
      arrow
    >
      {
        hasNewNotifications ?
          <NotificationWrapper className={openNotification ? "open":"closed"}>
            <Bullet />
            <NotificationsOutlined onClick={handleNotificationButtonClick} />
          </NotificationWrapper>
          
          :
          <NotificationWrapper className={openNotification ? "open":"closed"}>
            <NotificationsOutlined onClick={handleNotificationButtonClick} />
          </NotificationWrapper>
      }
      </StyledTooltip>
      )
};

export default NotificationsIcon;
