import Image from "next/image";
import type { FC } from "react";
import { getActivityNameAndIconPath } from "~components/pointsActivityTable/service/pointsActivity.service";
import { PointsActivityEnum } from "~components/pointsActivityTable/service/types";
import { pointsActivityWording } from "~containers/fidSpace/wording";
import { StyledActivityColumnContainer } from "./ActivityColumn.style";

interface IActivityColumn {
  activityType: PointsActivityEnum

}

const ActivityColumn: FC<IActivityColumn> = ({activityType}) => {
    const {name, iconPath} = getActivityNameAndIconPath(activityType, pointsActivityWording)
  return <StyledActivityColumnContainer>
          <Image width={28} height={20} src={iconPath} />
          <span>{name}</span>
        </StyledActivityColumnContainer>;
};

export default ActivityColumn;
