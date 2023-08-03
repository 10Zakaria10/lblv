import dynamic from "next/dynamic";
import { FC, useState } from "react";
import Coupon from "~components/coupon";
import Popup from "~components/popup";
import TitleBloc from "~components/titleBloc";
import useCouponQuery from "~containers/hooks/coupon/useCouponQuery";
import { useClientQuery } from "~containers/hooks/fidSpace";
import useWalletQuery from "~containers/hooks/fidSpace/useWalletQuery";
import {
  StyledCouponsContainer,
  StyledCouponsContent,
  StyledCouponsTitle,
  StyledFidiliteCardContainer,
  StyledFidiliteContentContainer,
  StyledPopupCardContainer,
  StyledPopupCouponContainer,
} from "./FidiliteCard.style";
import { formatDate, getFullName } from "./service/fidilite.service";
import fidiliteCardWording from "./wording";

export const FidCard = dynamic(() => import("~components/fidCard"));

interface IFidiliteCard {}

const FidiliteCard: FC<IFidiliteCard> = ({}) => {
  const { title, couponsTitle, points, currency, validityDateMsg } =
    fidiliteCardWording;

  const { wallet } = useWalletQuery();
  const { client } = useClientQuery();
  const { coupons } = useCouponQuery();

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const togglePopup = () => {
    setPopupOpen((open) => !open);
  };

  const handleCardClick = () => {
    setCouponCode("");
    togglePopup();
  };

  const handleCouponClick = (id: string) => {
    setCouponCode(id);
    togglePopup();
  };

  return (
    <StyledFidiliteCardContainer>
      <TitleBloc title={title} />
      <StyledFidiliteContentContainer>
        {wallet && client && (
          <FidCard
            cardCode={wallet.cardCode}
            pointsWording={points}
            totalPoints={wallet.balance}
            name={getFullName(client.firstName, client.lastName)}
            onclick={handleCardClick}
          />
        )}
        <StyledCouponsContainer>
          <StyledCouponsTitle>{couponsTitle}</StyledCouponsTitle>
          <StyledCouponsContent>
            {coupons &&
              coupons.map(({ id, amount, ean, expiredAt }) => (
                <Coupon
                  key={id}
                  currency={currency}
                  validityDateMsg={validityDateMsg}
                  balance={amount}
                  date={formatDate(expiredAt)}
                  couponCode={ean}
                  onClick={() => handleCouponClick(id)}
                />
              ))}
          </StyledCouponsContent>
        </StyledCouponsContainer>
      </StyledFidiliteContentContainer>
      <Popup isOpen={isPopupOpen} setOpen={togglePopup}>
        {couponCode === "" ? (
          <StyledPopupCardContainer>
            {wallet && client && (
              <FidCard
                cardCode={wallet.cardCode}
                pointsWording={points}
                totalPoints={wallet.balance}
                name={getFullName(client.firstName, client.lastName)}
                onclick={togglePopup}
              />
            )}
          </StyledPopupCardContainer>
        ) : (
          <StyledPopupCouponContainer>
            {coupons &&
              coupons
                .filter(({ id }) => id === couponCode)
                .map(({ id, amount, ean, expiredAt }) => (
                  <Coupon
                    key={id}
                    currency={currency}
                    validityDateMsg={validityDateMsg}
                    balance={amount}
                    date={formatDate(expiredAt)}
                    couponCode={ean}
                    onClick={() => handleCouponClick(id)}
                  />
                ))}
          </StyledPopupCouponContainer>
        )}
      </Popup>
    </StyledFidiliteCardContainer>
  );
};

export default FidiliteCard;
