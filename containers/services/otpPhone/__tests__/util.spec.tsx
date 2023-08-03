import { isOTPValid } from "../utils";

describe("Tesing isValid funtion", () => {
  it("should return valid when 4 digits ", () => {
    const result = isOTPValid("1234");
    expect(result).toBe(true);
  });
  it("should return valid when 2 digits ", () => {
    const result = isOTPValid("12");
    expect(result).toBe(false);
  });
  it("should return valid when 1 digits ", () => {
    const result = isOTPValid("1");
    expect(result).toBe(false);
  });
  it("should return valid when empty ", () => {
    const result = isOTPValid("");
    expect(result).toBe(false);
  });

  it("should return valid when more then 4 digits ", () => {
    const result = isOTPValid("123456");
    expect(result).toBe(false);
  });
});
