import { FC, useState } from "react";
import { notificationDto } from "~components/fidHeader/types";
import { dateToAMPM } from "~utils/dateTimeUtils";
import useSetNotificationsMutation from "../hooks/useSetNotificationSeen";
import { NotificationContainer, NotificationIcon, Time } from "./NotificationItem.style";

const getText = (type: string, amount:number, balance?:number)=>{
  if(type==="EARN"){
    return `Vous venez d'effectuer un achat de "${amount}" dhs, votre nouveau solde de points est de "${balance}" points`
  }else if(type==="BURN"){
    return `Vous venez d'utiliser votre bon d'achat de "${amount}" dhs`
  }
}
const getIcon = (type: string)=>{
  if(type==="EARN"){
    return <NotificationIcon src="/images/earn-points.svg" />
  }else if(type==="BURN"){
    return <NotificationIcon src="/images/burn-points.svg" />
  }
}
const NotificationItem: FC<notificationDto> = ({type, amount, newBalance, createdAt, id, opened}) => {
  const {mutateAsync:setNotificationSeen } = useSetNotificationsMutation();
  const handleClick = (notificationId:string) => {
    return ()=>{
      if(!opened){
        setNotificationSeen(notificationId)
      }
    }
  }
  return <NotificationContainer onClick={handleClick(id)}>
      {getIcon(type)}
      <div>
        {getText(type,amount,newBalance)}
        <Time>{dateToAMPM(createdAt)}</Time>
      </div>
  </NotificationContainer>;
};

export default NotificationItem;
