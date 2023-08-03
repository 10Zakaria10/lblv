import type { FC } from "react";
import { StyledPointColumn } from "./pointsColumn.style";

interface IPointsColumn {
  points: number;
  pointsText: string;
}

const PointsColumn: FC<IPointsColumn> = ({ points, pointsText }) => {
  return (
    <StyledPointColumn points={points}>
      {points >= 0 && "+"}
      {points} {pointsText}
    </StyledPointColumn>
  );
};

export default PointsColumn;
