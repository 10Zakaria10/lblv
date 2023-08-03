import { ExpandLess, ExpandMore } from "@mui/icons-material";
import type { FC } from "react";
import { StyledSortContainer } from "./SortIndicator.style";

interface ISortIndicatorProps {
  isSorted?: boolean;
  isSortedDesc?: boolean;
}
const SortIndicator: FC<ISortIndicatorProps> = ({ isSorted, isSortedDesc }) => {
  const getSortIcon = () => {
    if (isSortedDesc) {
      return <ExpandMore />;
    }
    return <ExpandLess />;
  };
  return (
    <StyledSortContainer id="default-sort-container">
      {!isSorted ? <ExpandMore /> : getSortIcon()}
    </StyledSortContainer>
  );
};

export default SortIndicator;
