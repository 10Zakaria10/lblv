import apiClient from "~utils/apiClient";
import { IOtpDto } from "../types";
import { validateOtp } from "../otp.service";

// implementation tests!
function getMockedApiClient(shouldReturn: unknown) {
  return jest.fn(() => Promise.resolve(shouldReturn));
}
const fields: IOtpDto = {
  otp: "1234",
  phoneNumber: "0661049105",
};
describe("Tesing validateOtp hook", () => {
  it("should return true when otp is valid ", async () => {
    apiClient.post = getMockedApiClient(true);

    const result = await validateOtp(fields);
    expect(result).toBe(true);
  });
  it("should return true when  otp is not valid ", async () => {
    apiClient.post = getMockedApiClient(false);
    const result = await validateOtp(fields);
    expect(result).toBe(false);
  });
});
