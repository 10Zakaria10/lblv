import Image from "next/image";
import { FC } from "react";
import { StyledBannerProfileCompletion } from "./WelcomeBanner.style";

interface IProfileCompletion {
    isProfileCompleted: boolean;
    description: string;

}

const ProfileCompletion: FC<IProfileCompletion> = ({isProfileCompleted, description}) => {

    return (
        <>
        {!isProfileCompleted && <StyledBannerProfileCompletion>
        <img src="/images/profile-completion.svg" width={20} height={20}/>
        <a href="">{description}</a>
      </StyledBannerProfileCompletion>}
      </>
    );
}

export default ProfileCompletion;