import { useMutation} from "react-query";
import { setNotificationSeen} from "../services/notifications.service";

const useSetNotificationsMutation = () => {
    const {
        mutateAsync,
        isLoading: loading,
        error,
    } = useMutation(setNotificationSeen);
    return { loading, error,mutateAsync };
}
export default useSetNotificationsMutation