import { useMutation} from "react-query";
import { logout } from "../services/settings.services";

const useLogoutMutation = () => {
    const {
        mutateAsync,
        isLoading: loading,
        error,
    } = useMutation(logout);
    return { loading, error,mutateAsync };
}
export default useLogoutMutation