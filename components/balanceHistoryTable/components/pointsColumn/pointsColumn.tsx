import type { FC } from "react";
import { StyledPointColumn } from "./pointsColumn.style";

interface IPointsColumn {
  points: number;
  pointsText: string;
}

const PointsColumn: FC<IPointsColumn> = ({ points, pointsText }) => {
  return (
    <StyledPointColumn>
      + {points} {pointsText}
    </StyledPointColumn>
  );
};

export default PointsColumn;
