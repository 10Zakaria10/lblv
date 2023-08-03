import React from "react";
import { UnderlinedText, CGLabelSpan } from "./style";

interface ICGLabel {
  firstText: string;
  linkText: string;
  endText: string;
}
const CGLabel: React.FC<ICGLabel> = ({ firstText, linkText, endText }: ICGLabel) => {
  return (
    <CGLabelSpan>
      {firstText} <UnderlinedText>{linkText}</UnderlinedText> {endText}
    </CGLabelSpan>
  );
};

export { CGLabel };
