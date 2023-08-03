export interface IOtpDto {
  otp: string;
  attemptsLeft: number;
  generationLeft: number;
  phoneNumber: string;
  secondsLeftFromExpiration: number;
  generatedAt: string;
}

export interface ISignUpOtpQuery {
  phoneNumber: string;
  otp?: string;
}
