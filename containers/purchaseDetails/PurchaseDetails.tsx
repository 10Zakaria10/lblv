import dynamic from "next/dynamic";
import type { FC } from "react";
import TitleBloc from "~components/titleBloc";
import useReceiptQuery from "~containers/hooks/receipt/useReceiptQuery";
import {
  foramtReceiptDate,
  groupeReceiptLinesByCategory,
} from "~containers/services/receipt/receipt.service";
import {
  StyledPaymentContainer,
  StyledPaymentDetails,
  StyledPaymentDetailsContainer,
  StyledPaymentMethodeContainer,
  StyledPaymentOperation,
  StyledPurchaseDetailsContainer,
  StyledStoreName,
  StyledTicketDate,
  StyledTicketDetailsContainer,
  StyledTicketInfoContainer,
  StyledTicketNumber,
} from "./PurchaseDetails.style";
import purchaseDetailsWording from "./wording";

const ProductCategoryGroup = dynamic(
  () => import("~components/productCategoryGroup"),
  {
    ssr: false,
  },
);
interface IPurchaseDetails {
  id: string | undefined;
}

const PurchaseDetails: FC<IPurchaseDetails> = ({ id }) => {
  const {
    ticketNumber,
    title,
    coupon,
    currentSolde,
    paymentMethode,
    previousSolde,
    total,
    totalItems,
    dh,
    points,
  } = purchaseDetailsWording;
  const { receipt } = useReceiptQuery(id);

  return (
    <StyledPurchaseDetailsContainer>
      <TitleBloc title={title} />
      {receipt && (
        <>
          <StyledTicketInfoContainer>
            <StyledStoreName>{receipt.store.name}</StyledStoreName>
            <StyledTicketNumber>
              {ticketNumber}
              <span>{receipt.remoteId}</span>
            </StyledTicketNumber>
            <StyledTicketDate>
              {foramtReceiptDate(receipt.createdAt)}
            </StyledTicketDate>
          </StyledTicketInfoContainer>
          <StyledTicketDetailsContainer>
            <ProductCategoryGroup
              receiptLines={groupeReceiptLinesByCategory(
                receipt.receiptLines || [],
              )}
            />
            <StyledPaymentContainer>
              <StyledPaymentDetailsContainer>
                {receipt.totalDiscount > 0 && (
                  <StyledPaymentDetails>
                    <StyledPaymentOperation>
                      <span>{coupon}</span>
                    </StyledPaymentOperation>
                    <>
                      - {receipt.totalDiscount} {dh}
                    </>
                  </StyledPaymentDetails>
                )}
                <StyledPaymentDetails>
                  <StyledPaymentOperation>{total}</StyledPaymentOperation>
                  <span>
                    {receipt.totalAmountTTC} {dh}
                  </span>
                </StyledPaymentDetails>
                <StyledPaymentDetails>
                  <StyledPaymentOperation>
                    {previousSolde}
                  </StyledPaymentOperation>
                  <>
                    {receipt.oldBalance} {points}
                  </>
                </StyledPaymentDetails>
                <StyledPaymentDetails>
                  <StyledPaymentOperation>
                    {currentSolde}
                  </StyledPaymentOperation>
                  <>
                    {receipt.newBalance} {points}
                  </>
                </StyledPaymentDetails>
              </StyledPaymentDetailsContainer>
              <StyledPaymentMethodeContainer>
                <StyledPaymentDetails>
                  <StyledPaymentOperation>{totalItems}</StyledPaymentOperation>
                  <>{receipt ? receipt.receiptLines.length : 0}</>
                </StyledPaymentDetails>
                <StyledPaymentDetails>
                  <StyledPaymentOperation>
                    {paymentMethode}
                  </StyledPaymentOperation>
                  <>{receipt.paymentTypes.join(", ")}</>
                </StyledPaymentDetails>
              </StyledPaymentMethodeContainer>
            </StyledPaymentContainer>
          </StyledTicketDetailsContainer>
        </>
      )}
    </StyledPurchaseDetailsContainer>
  );
};

export default PurchaseDetails;
