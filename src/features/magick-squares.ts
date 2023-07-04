import { normalizeString } from './utils';

const ASCII_OFFSET_VALUE = 'a'.charCodeAt(0) - 1;

const generateAlphanumericMap = () => {
  const alphanumericMap = new Map<string, number>();
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    alphanumericMap.set(String.fromCharCode(i), i - ASCII_OFFSET_VALUE);
  }
  for (let i = 0; i <= 9; i++) {
    alphanumericMap.set(i.toString(), i);
  }
  return alphanumericMap;
};

export type Planet =
  | 'saturn'
  | 'jupiter'
  | 'mars'
  | 'sun'
  | 'venus'
  | 'mercury'
  | 'moon';

export const ALPHANUMERIC_MAP = generateAlphanumericMap();

export const getLetterValue = (char: string, maxAllowedValue: number) => {
  const charValue = ALPHANUMERIC_MAP.get(char);

  if (!charValue) return 0;

  const mod = charValue % maxAllowedValue;
  return mod > 0 ? mod : maxAllowedValue;
};

export const getLettersValues = (word: string, maxAllowedValue: number) => {
  const formattedString = normalizeString(word);
  let sums: number[] = [];

  for (let i = 0; i < formattedString.length; i++) {
    sums[i] = getLetterValue(formattedString[i], maxAllowedValue);
  }

  return sums;
};

export const getWordValue = (word: string, maxAllowedValue: number) => {
  const formattedString = normalizeString(word);
  let sum = 0;

  for (let i = 0; i < formattedString.length; i++) {
    sum += getLetterValue(formattedString[i], maxAllowedValue);
  }

  const mod = sum % maxAllowedValue;
  return mod > 0 ? mod : maxAllowedValue;
};

export const getWordsValues = (sentence: string, maxAllowedValue: number) => {
  const words = sentence.split(' ');
  const sums: number[] = [];

  for (let i = 0; i < words.length; i++) {
    sums[i] = getWordValue(words[i], maxAllowedValue);
  }

  return sums;
};

export const saturn = [2, 9, 4, 7, 5, 3, 6, 1, 8];
export const jupiter = [1, 15, 14, 4, 12, 6, 7, 9, 8, 10, 11, 5, 13, 3, 2, 16];
export const mars = [
  11, 24, 7, 20, 3, 4, 12, 25, 8, 16, 17, 5, 13, 21, 9, 10, 18, 1, 14, 22, 23,
  6, 19, 2, 15,
];
export const sun = [
  1, 32, 34, 3, 35, 6, 30, 8, 27, 28, 11, 7, 20, 24, 15, 16, 13, 23, 19, 17, 21,
  22, 18, 14, 10, 26, 12, 9, 29, 25, 31, 4, 2, 33, 5, 36,
];
export const venus = [
  22, 47, 16, 41, 10, 35, 4, 5, 23, 48, 17, 42, 11, 29, 30, 6, 24, 49, 18, 36,
  12, 13, 31, 7, 25, 43, 19, 37, 38, 14, 32, 1, 26, 44, 20, 21, 39, 8, 33, 2,
  27, 45, 46, 15, 40, 9, 34, 3, 28,
];
export const mercury = [
  8, 58, 59, 5, 4, 62, 63, 1, 49, 15, 14, 52, 53, 11, 10, 56, 41, 23, 22, 44,
  45, 19, 18, 48, 32, 34, 35, 29, 28, 38, 39, 25, 40, 26, 27, 37, 36, 30, 31,
  33, 17, 47, 46, 20, 21, 43, 42, 24, 9, 55, 54, 12, 13, 51, 50, 16, 64, 2, 3,
  61, 60, 6, 7, 57,
];
export const moon = [
  37, 78, 29, 70, 21, 62, 13, 54, 5, 6, 38, 79, 30, 71, 22, 63, 14, 46, 47, 7,
  39, 80, 31, 72, 23, 55, 15, 16, 48, 8, 40, 81, 32, 64, 24, 56, 57, 17, 49, 9,
  41, 73, 33, 65, 25, 26, 58, 18, 50, 1, 42, 74, 34, 66, 67, 27, 59, 10, 51, 2,
  43, 75, 35, 36, 68, 19, 60, 11, 52, 3, 44, 76, 77, 28, 69, 20, 61, 12, 53, 4,
  45,
];
