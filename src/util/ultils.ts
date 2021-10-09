/**
 * Util function which receives a full name and returns the initials only
 * @param fullName
 * @returns @type {string}
 */
export const getInitialsOnly = (fullName: string) => {
  return fullName
    .split(" ")
    .map((char) => char[0])
    .join("");
};
