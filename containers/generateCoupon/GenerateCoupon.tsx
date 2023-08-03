import { FC, useState } from "react";
import React from "react";
import {
  IOSSlider,
  StyledBalanceContainer,
  StyledButtonContainer,
  StyledCouponGeneratorContainer,
  StyledCouponGeneratorContent,
  StyledCouponGeneratorContentContainer,
  StyledCouponsDesc,
  StyledDesc,
  StyledDivider,
  StyledRemainingBalance,
  StyledSliderContainer,
  StyledSoldDesc,
  StyledSolde,
  StyledSwapIconContainer,
} from "./GenerateCoupon.style";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import TitleBloc from "~components/titleBloc";
import DropDown from "~components/dropDown";
import { DropDownValueType } from "~components/dropDown/types";
import {
  convertPointsToMAD,
  getDropDownMarks,
  getRemainingBalance,
  getSliderMarks,
} from "./service/generateCoupon.service";
import Button from "~components/button";
import { ButtonType } from "~components/button/Button";
import useWalletQuery from "~containers/hooks/fidSpace/useWalletQuery";
import useCouponMutation from "~containers/hooks/coupon/useCouponMutation";
import { CircularProgress } from "@mui/material";
import generateCouponWording from "./wording";
import {
  CONVEERSION_STEP,
  MAX_POINTS_TO_CONVERT,
  MIN_POINTS_TO_CONVERT,
} from "./service/constants";

interface IGenerateCoupon {}

const GenerateCoupon: FC<IGenerateCoupon> = ({}) => {
  const { wallet } = useWalletQuery();
  const { mutateAsync: genrateCoupon, loading, error } = useCouponMutation();

  const {
    title,
    soldeDesc,
    points,
    remainingBalanceP1,
    remainingBalanceP2,
    description,
    or,
    convert,
    dhs,
    informations,
    totalPoints,
  } = generateCouponWording;

  const [value, setValue] = useState<number>(200);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const sliderMarks = getSliderMarks(value);
  const DropDownMarks = getDropDownMarks(isFirstTime, totalPoints);

  function valueLabelFormat(value: number) {
    return `${value} ${points}`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      setIsFirstTime(false);
    }
  };

  const handleDropDownChange = (newValue: DropDownValueType) => {
    setValue(newValue as number);
    setIsFirstTime(false);
  };

  const handleGenrateButtonClick = () => {
    genrateCoupon({ points: value });
  };
  return (
    <StyledCouponGeneratorContainer>
      <TitleBloc title={title} />
      <StyledCouponGeneratorContentContainer>
        <StyledCouponGeneratorContent>
          <StyledSoldDesc>
            {soldeDesc} <span>{wallet?.balance}</span> {points}
          </StyledSoldDesc>
          <StyledDesc>{description}</StyledDesc>
          <StyledSliderContainer>
            <IOSSlider
              onChange={handleChange}
              value={value}
              valueLabelFormat={valueLabelFormat}
              step={CONVEERSION_STEP}
              marks={sliderMarks}
              valueLabelDisplay="on"
              min={MIN_POINTS_TO_CONVERT}
              max={MAX_POINTS_TO_CONVERT}
            />
          </StyledSliderContainer>
          <StyledDivider variant="inset">{or}</StyledDivider>
          <div>
            <DropDown
              isDisabled={loading}
              value={value}
              onChange={handleDropDownChange}
              options={DropDownMarks}
            />
          </div>

          <StyledBalanceContainer>
            <StyledSwapIconContainer>
              <SwapVertIcon color="primary" />
            </StyledSwapIconContainer>
            <StyledSolde>
              {convertPointsToMAD(value)}
              <span> {dhs}</span>
            </StyledSolde>
            <StyledRemainingBalance>
              {remainingBalanceP1}
              <span>
                {` ${getRemainingBalance(
                  wallet?.balance || 0,
                  value,
                )} ${points} `}
              </span>
              {remainingBalanceP2}
            </StyledRemainingBalance>
          </StyledBalanceContainer>
          <StyledButtonContainer>
            {loading ? (
              <Button
                startIcon={<CircularProgress color="inherit" />}
                buttonType={ButtonType.FILLED}
                onClick={handleGenrateButtonClick}
              />
            ) : (
              <Button
                text={convert}
                buttonType={ButtonType.FILLED}
                onClick={handleGenrateButtonClick}
              />
            )}
          </StyledButtonContainer>
          <StyledCouponsDesc>{informations}</StyledCouponsDesc>
        </StyledCouponGeneratorContent>
      </StyledCouponGeneratorContentContainer>
    </StyledCouponGeneratorContainer>
  );
};

export default GenerateCoupon;
