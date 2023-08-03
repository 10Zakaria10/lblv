import { useBarcode } from "next-barcode";
import type { FC } from "react";
import { StyledBarcodeContainer } from "./Barcode.style";

interface IBarcode {
  code: string;
  color?: string;
}

const Barcode: FC<IBarcode> = ({ code, color }) => {
  const { inputRef } = useBarcode({
    value: code,
    options: {
      background: color ?? "#ffffff",
      height: 25,
      format: "EAN13",
      fontSize: 11,
      flat: true,
      width: 0.9,
    },
  });

  return (
    <StyledBarcodeContainer>
      <svg ref={inputRef} />
    </StyledBarcodeContainer>
  );
};

export default Barcode;
