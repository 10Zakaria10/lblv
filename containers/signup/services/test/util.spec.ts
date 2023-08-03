import { getLengthOfPrefix, getPhoneNumberWithSpaces, getUsedPrefix, removeWhiteSpace, startWithOneOf } from "../utils";

describe("Tesing phone validation utility functions", () => {
  it("should return length of prefix when prefix exist ", () => {
    const result = getLengthOfPrefix("+212661049100");
    expect(result).toEqual(5);
  });
  it("should return 0 when prefix doesnt exist", () => {
    const result = getLengthOfPrefix("+212961049100");
    expect(result).toEqual(0);
  });
  it("should return prefix when getUsedPrefix is called and phone contain prefix ", () => {
    const result = getUsedPrefix("0661049100");
    expect(result).toEqual("06");
  });
  it("should return empty string when getUsedPrefix is called and phone doenst contain a prefix ", () => {
    const result = getUsedPrefix("61049100");
    expect(result).toEqual("");
  });
  4;
  it("should remove white space from string ", () => {
    const result = removeWhiteSpace("  065 54 88 9 ");
    expect(result).toEqual("06554889");
  });
  it("should return true when phone number start with one of prefixes", () => {
    const result = startWithOneOf("0661049555");
    expect(result).toBe(true);
  });
  it("should return false when phone number doesnt start with one of prefixes", () => {
    const result = startWithOneOf("0561049555");
    expect(result).toBe(false);
  });
  it("should adjust spaces to phone number", () => {
    const result = getPhoneNumberWithSpaces("06 22", "06 223");
    expect(result).toEqual("06 22 3");
  });
  it("should adjust spaces to phone number- second case", () => {
    const result = getPhoneNumberWithSpaces("06 22 3", "06 22 32");
    expect(result).toEqual("06 22 32");
  });
  it("should not adjust spaces to phone number when prefix is invalid", () => {
    const result = getPhoneNumberWithSpaces("05", "053");
    expect(result).toEqual("053");
  });
  it("should delete number when space is deleted", () => {
    const result = getPhoneNumberWithSpaces("06 ", "06");
    expect(result).toEqual("0");
  });
  it("should not accept manual spacing", () => {
    const result = getPhoneNumberWithSpaces("06 ", "06  ");
    expect(result).toEqual("06 ");
  });
});
