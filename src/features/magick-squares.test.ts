import { describe, expect, test } from 'vitest';
import {
  ALPHANUMERIC_MAP,
  getLetterValue,
  getLettersValues,
  getWordValue,
  getWordsValues,
  saturn,
  jupiter,
  mars,
  sun,
  venus,
  mercury,
  moon,
} from './magick-squares';

describe('ALPHANUMERIC_MAP', () => {
  test('should return the correct value', () => {
    expect(ALPHANUMERIC_MAP.get('a')).toBe(1);
    expect(ALPHANUMERIC_MAP.get('b')).toBe(2);
    expect(ALPHANUMERIC_MAP.get('c')).toBe(3);
    expect(ALPHANUMERIC_MAP.get('z')).toBe(26);
  });
});

describe('getLetterValue', () => {
  test('should return the correct value for mod 3', () => {
    expect(getLetterValue('a', 3)).toBe(1);
    expect(getLetterValue('b', 3)).toBe(2);
    expect(getLetterValue('c', 3)).toBe(3);
    expect(getLetterValue('d', 3)).toBe(1);
    expect(getLetterValue('e', 3)).toBe(2);
    expect(getLetterValue('z', 3)).toBe(2);
  });

  test('should return the correct value for mod 4', () => {
    expect(getLetterValue('a', 4)).toBe(1);
    expect(getLetterValue('b', 4)).toBe(2);
    expect(getLetterValue('c', 4)).toBe(3);
    expect(getLetterValue('d', 4)).toBe(4);
    expect(getLetterValue('e', 4)).toBe(1);
    expect(getLetterValue('z', 4)).toBe(2);
  });
});

describe('getLettersValues', () => {
  test('should return the correct values', () => {
    expect(getLettersValues('abcdef', 3)).toStrictEqual([1, 2, 3, 1, 2, 3]);
    expect(getLettersValues('abcdef', 4)).toStrictEqual([1, 2, 3, 4, 1, 2]);
    expect(getLettersValues('abc def', 3)).toStrictEqual([1, 2, 3, 1, 2, 3]);
    expect(getLettersValues('á^b~ç!@@#$def', 4)).toStrictEqual([
      1, 2, 3, 4, 1, 2,
    ]);
  });
});

describe('getWordValue', () => {
  test('should return the correct values', () => {
    expect(getWordValue('a', 3)).toBe(1);
    expect(getWordValue('b', 3)).toBe(2);
    expect(getWordValue('c', 3)).toBe(3);
    expect(getWordValue('d', 3)).toBe(1);
    expect(getWordValue('aaa', 3)).toBe(3);
    expect(getWordValue('aaaa', 3)).toBe(1);
    expect(getWordValue('ab', 3)).toBe(3);
  });
});

describe('getWordsValues', () => {
  test('should return the correct values', () => {
    expect(getWordsValues('a', 3)).toStrictEqual([1]);
    expect(getWordsValues('a a', 3)).toStrictEqual([1, 1]);
    expect(getWordsValues('a aaa ab b!@#$%^&*(', 3)).toStrictEqual([
      1, 3, 3, 2,
    ]);
  });
});

const sumRows = (square: number[], size: number) => {
  const rowSums = [];
  for (let i = 0; i < square.length; i += size) {
    const row = square.slice(i, i + size);
    const rowSum = row.reduce((sum, num) => sum + num, 0);
    rowSums.push(rowSum);
  }
  return rowSums;
};

const sumColumns = (square: number[], size: number) => {
  const columnSums = [];
  for (let col = 0; col < size; col++) {
    let colSum = 0;
    for (let row = 0; row < size; row++) {
      colSum += square[row * size + col];
    }
    columnSums.push(colSum);
  }
  return columnSums;
};

const sumDiagonals = (square: number[], size: number) => {
  let mainDiagonalSum = 0;
  let antiDiagonalSum = 0;
  for (let i = 0; i < size; i++) {
    mainDiagonalSum += square[i * size + i];
    antiDiagonalSum += square[i * size + (size - 1 - i)];
  }
  return [mainDiagonalSum, antiDiagonalSum];
};

describe('planets', () => {
  test('saturn - the sum of each column, row and diagonal should be equal to 15', () => {
    const rowSums = sumRows(saturn, 3);
    const columnSums = sumColumns(saturn, 3);
    const diagonalsSums = sumDiagonals(saturn, 3);

    rowSums.forEach((sum) => expect(sum).toBe(15));
    columnSums.forEach((sum) => expect(sum).toBe(15));
    diagonalsSums.forEach((sum) => expect(sum).toBe(15));
  });

  test('jupiter - the sum of each column, row and diagonal should be equal to 34', () => {
    const rowSums = sumRows(jupiter, 4);
    const columnSums = sumColumns(jupiter, 4);
    const diagonalsSums = sumDiagonals(jupiter, 4);

    rowSums.forEach((sum) => expect(sum).toBe(34));
    columnSums.forEach((sum) => expect(sum).toBe(34));
    diagonalsSums.forEach((sum) => expect(sum).toBe(34));
  });

  test('mars - the sum of each column, row and diagonal should be equal to 65', () => {
    const rowSums = sumRows(mars, 5);
    const columnSums = sumColumns(mars, 5);
    const diagonalsSums = sumDiagonals(mars, 5);

    rowSums.forEach((sum) => expect(sum).toBe(65));
    columnSums.forEach((sum) => expect(sum).toBe(65));
    diagonalsSums.forEach((sum) => expect(sum).toBe(65));
  });

  test('sun - the sum of each column, row and diagonal should be equal to 111', () => {
    const rowSums = sumRows(sun, 6);
    const columnSums = sumColumns(sun, 6);
    const diagonalsSums = sumDiagonals(sun, 6);

    rowSums.forEach((sum) => expect(sum).toBe(111));
    columnSums.forEach((sum) => expect(sum).toBe(111));
    diagonalsSums.forEach((sum) => expect(sum).toBe(111));
  });

  test('venus - the sum of each column, row and diagonal should be equal to 175', () => {
    const rowSums = sumRows(venus, 7);
    const columnSums = sumColumns(venus, 7);
    const diagonalsSums = sumDiagonals(venus, 7);

    rowSums.forEach((sum) => expect(sum).toBe(175));
    columnSums.forEach((sum) => expect(sum).toBe(175));
    diagonalsSums.forEach((sum) => expect(sum).toBe(175));
  });

  test('mercury - the sum of each column, row and diagonal should be equal to 260', () => {
    const rowSums = sumRows(mercury, 8);
    const columnSums = sumColumns(mercury, 8);
    const diagonalsSums = sumDiagonals(mercury, 8);

    rowSums.forEach((sum) => expect(sum).toBe(260));
    columnSums.forEach((sum) => expect(sum).toBe(260));
    diagonalsSums.forEach((sum) => expect(sum).toBe(260));
  });

  test('moon - the sum of each column, row and diagonal should be equal to 369', () => {
    const rowSums = sumRows(moon, 9);
    const columnSums = sumColumns(moon, 9);
    const diagonalsSums = sumDiagonals(moon, 9);

    rowSums.forEach((sum) => expect(sum).toBe(369));
    columnSums.forEach((sum) => expect(sum).toBe(369));
    diagonalsSums.forEach((sum) => expect(sum).toBe(369));
  });
});
