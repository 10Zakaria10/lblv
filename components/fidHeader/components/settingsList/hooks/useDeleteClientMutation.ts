import { useMutation } from "react-query";
import { deleteClient } from "../services/settings.services";

const useDeleteClientMutation = () => {
    const {
        mutateAsync,
        isLoading: loading,
        error,
    } = useMutation(deleteClient);
    return { loading, error,mutateAsync };
}
export default useDeleteClientMutation;