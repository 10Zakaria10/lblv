import * as React from "react";
import { isStoreFilterBtnActive, StoreFilterStoreBtn } from "./StoreFilter.style";
import CheckIcon from "@mui/icons-material/Check";
interface IStoreFilterStore {
  isChecked: boolean;
  storeCategoryIconPath: string;
  text: string;
  onClick: (id: number) => void;
  id: number;
}

const StoreFilter: React.FC<IStoreFilterStore> = ({ text, isChecked, storeCategoryIconPath, onClick, id }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <StoreFilterStoreBtn onClick={handleClick} color={isChecked ? "primary" : "secondary"}>
      <img src={storeCategoryIconPath} />
      {text}
      {isChecked && <CheckIcon />}
    </StoreFilterStoreBtn>
  );
};
export default StoreFilter;
