import { CONVERSION_RATE } from "./constants";

  
  export const getRemainingBalance = (solde: number, couponBalance: number) => {
    return solde - couponBalance;
  }

  export const convertPointsToMAD = (points: number) =>{
    return points / CONVERSION_RATE;
  }

  export const getSliderMarks = (value:number) => {
    return [
    {
      value: 200,
      label: value === 200 ? "" : "200",
    },
    {
      value: 400,
    },
    {
      value: 600,
    },
    {
      value: 800,
    },
    {
      value: 1000,
      label: value === 1000 ? "" : "1000"
    },
  ];
  }

  export const getDropDownMarks = (isFirstTime: boolean, label:string) => {
    return [
    {
      value: 200,
      label: isFirstTime ? label:"200",
    },
    {
      value: 400,
      label: "400",
    },
    {
      value: 600,
      label: "600",
    },
    {
      value: 800,
      label: "800",
    },
    {
      value: 1000,
      label: "1000",
    },
  ]}
