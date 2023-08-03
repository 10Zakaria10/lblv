import { notificationDto } from "~components/fidHeader/types";
import apiClient from "~utils/apiClient";

export const getNotifications = () => {
    return apiClient.get<notificationDto[]>("/notifications");
};
export const setNotificationSeen = (param?: string) => {
    return apiClient.patch("/notifications",{data:{notificationId:param}});
};
export const getUnseenNotifications= (allNotifications:notificationDto[])=>{
    const unseenNotifications = allNotifications.filter((notification)=>{
      if(!notification.opened){
        return notification
      }
    })
    return unseenNotifications
}