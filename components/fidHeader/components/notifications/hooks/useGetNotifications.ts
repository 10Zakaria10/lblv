import { useQuery } from "react-query";
import { notificationDto } from "~components/fidHeader/types";
import { ApiError } from "~types/apiError";
import { getNotifications } from "../services/notifications.service";

const useGetNotificationsQuery = (type: string) => {
  const {
    isLoading: loading,
    data: notifications,
    error,
  } = useQuery<notificationDto[], ApiError>([type], getNotifications, {
    refetchInterval: 25000,
  });
  return { loading, error, notifications };
};
export default useGetNotificationsQuery;
