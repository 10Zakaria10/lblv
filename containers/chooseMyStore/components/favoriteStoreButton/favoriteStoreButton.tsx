import { Dispatch, SetStateAction } from "react";
import Button from "~components/button";
import { useAddFavStoreMutation, useDeleteFavStoreMutation } from "~containers/chooseMyStore/hooks/useStoresMutation";
import wording from "../../wording";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ButtonType } from "~components/button/Button";

interface IFavStoreButton{
  setFavStore: Dispatch<SetStateAction<string|null>>;
  favStoreId:string|null;
  storeId: string|null;
}
const FavoriteStoreButton: React.FC<IFavStoreButton> = ({ storeId, favStoreId, setFavStore}) => {
  const {mutateAsync: addFavStore} = useAddFavStoreMutation();
  const {mutateAsync: deleteFavStore} = useDeleteFavStoreMutation();
  enum buttonClickType{
    "ADD", "DELETE"   
  }
  const handleButtonClick = (type:buttonClickType, storeId: string) => {
    if(type===buttonClickType.ADD){
      return async () => {
        await addFavStore({ storeId : storeId });
        setFavStore(storeId);
      }

    }else{
      return async () => {
        await deleteFavStore({ storeId : storeId });
        setFavStore(null);
      }
    }
  }
  return (
      <>
      {
        favStoreId === storeId ?
          <Button onClick={handleButtonClick(buttonClickType.DELETE, storeId ?? "")} text={wording.removeButton} startIcon={<CloseRoundedIcon />} buttonType={ButtonType.ERROR} />
          :
          (
            favStoreId === null ?
              <Button onClick={handleButtonClick(buttonClickType.ADD, storeId ?? "")} text={wording.chooseButton} startIcon={<AddRoundedIcon />} />
              :
              <Button text={wording.chooseButton} startIcon={<AddRoundedIcon />} disabled />
          )

      }
      </>
  );
};
export default FavoriteStoreButton;
