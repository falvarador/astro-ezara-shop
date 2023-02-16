export const truncate = (str: string, len: number): string =>
  str.length > len ? str.slice(0, len) + "..." : str;

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
