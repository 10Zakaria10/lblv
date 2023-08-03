import { FC } from "react";
import { DescriptionLabel, DescriptionPhoneNumber } from "./style";

interface IDescription {
  initialText: string;
  phoneNumber: string;
  endText: string;
}
export const Description: FC<IDescription> = ({ initialText, phoneNumber, endText }) => {
  return (
    <DescriptionLabel>
      {initialText}
      <DescriptionPhoneNumber> {phoneNumber}</DescriptionPhoneNumber>
      {endText}
    </DescriptionLabel>
  );
};
export default { Description };
