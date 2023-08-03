import type { FC } from "react";
import {
  StyledHeading,
  StyledHeadingContainer,
  StyledBlocDescription,
  StyledLink,
} from "./TitleBloc.style";

interface ITitleBloc {
  title: string;
  description?: string;
  linkText?: string;
  linkAddress?: string;
}

const TitleBloc: FC<ITitleBloc> = ({
  title,
  linkText,
  description,
  linkAddress,
}) => {
  return (
    <div>
      <StyledHeadingContainer>
        <StyledHeading>{title}</StyledHeading>
        <StyledLink href={linkAddress || "#"}>{linkText}</StyledLink>
      </StyledHeadingContainer>
      <StyledBlocDescription>{description}</StyledBlocDescription>
    </div>
  );
};

export default TitleBloc;
