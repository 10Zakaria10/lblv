import { useMutation } from "react-query";
import { ChooseMyStoreService } from "../services";

export const useAddFavStoreMutation = () => {
    const {
        mutateAsync,
        isLoading: loading,
        error,
    } = useMutation(ChooseMyStoreService.addFavStore);
    return { mutateAsync, loading, error};
}
export const useDeleteFavStoreMutation = () => {
    const {
        mutateAsync,
        isLoading: loading,
        error,
    } = useMutation(ChooseMyStoreService.deleteFavStore);
    return { mutateAsync, loading, error};
}
