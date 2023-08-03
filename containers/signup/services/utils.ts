export const PHONE_PREFIXES = ["+2126", "+2127", "06", "07", "002126", "002127"];

export const startWithOneOf = (value: string = ""): boolean => {
  for (const prefix of PHONE_PREFIXES) {
    if (value.startsWith(prefix)) return true;
  }
  return false;
};

export const getUsedPrefix = (value: string = ""): string => {
  for (const prefix of PHONE_PREFIXES) {
    if (value.startsWith(prefix)) return prefix;
  }
  return "";
};

export const getLengthOfPrefix = (value: string = ""): number => {
  for (const prefix of PHONE_PREFIXES) {
    if (value.startsWith(prefix)) return prefix.length;
  }
  return 0;
};

export const removeWhiteSpace = (value: string = ""): string => {
  return value.replace(/\s+/g, "");
};

export const getPhoneNumberWithSpaces = (previousValue: string, newValue: string): string => {
  let phoneWithSpace = "";
  // check if he manually entred whitespace
  if (previousValue + " " === newValue) {
    return previousValue;
  }
  newValue = removeWhiteSpace(newValue);
  previousValue = removeWhiteSpace(previousValue);

  // check if he deleted whitespace
  if (previousValue === newValue) {
    newValue = newValue.slice(0, -1);
  }

  //If Phone prefix is valid , adjust phone number spacing
  if (startWithOneOf(newValue)) {
    let numbersAfterPrefix = removeWhiteSpace(newValue.substring(getLengthOfPrefix(newValue)));
    let afterPrefixWithSpaces = "";

    for (var i = 0; i < numbersAfterPrefix.length; i++) {
      if (i % 2 === 0 && i !== 0) {
        afterPrefixWithSpaces = afterPrefixWithSpaces + " ";
      }
      afterPrefixWithSpaces = afterPrefixWithSpaces + numbersAfterPrefix[i];
    }
    phoneWithSpace = getUsedPrefix(newValue) + " " + afterPrefixWithSpaces;
  } else {
    phoneWithSpace = newValue;
  }

  return phoneWithSpace;
};
