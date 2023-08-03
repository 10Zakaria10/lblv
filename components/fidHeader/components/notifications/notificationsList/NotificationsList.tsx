import { NotificationsOutlined } from "@mui/icons-material";
import { FC, useEffect, useState } from "react";
import NotificationItem from "~components/fidHeader/components/notifications/notificationItem";
import { notificationDto } from "~components/fidHeader/types";
import { NoNewNotificationsContainer, NotificationsListContainer } from "./NotificationsList.style";

interface INotificationsList{
  notifications: notificationDto[];
}
const NotificationsList: FC<INotificationsList> = ({notifications}) => {
  return <NotificationsListContainer>
    {
      notifications?.length > 0 ?
        notifications?.map((notification)=>{
          return <NotificationItem opened={notification.opened} id={notification.id} type={notification.type} newBalance={notification.newBalance} amount={notification.amount} createdAt={new Date(notification.createdAt)}/>
        })
        :
        <NoNewNotificationsContainer>
          <NotificationsOutlined/>
          <h1>No new notifications!</h1>
        </NoNewNotificationsContainer>
    }
  </NotificationsListContainer>;
};

export default NotificationsList;
