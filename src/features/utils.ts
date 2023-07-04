// https://www.30secondsofcode.org/js/s/remove-accents/
export const removeAccents = (str: string) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const normalizeString = (str: string) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z ]/g, '')
    .replace(/\s/g, ''); // Remove blank spaces

export function sumDigits(num: number, maxAllowedValue: number) {
  const mod = num % maxAllowedValue;
  return mod > 0 ? mod : maxAllowedValue;
}

export const getPlanetValue = (planet: string) => {
  switch (planet) {
    case 'saturn':
      return 3;
    case 'jupiter':
      return 4;
    case 'mars':
      return 5;
    case 'sun':
      return 6;
    case 'venus':
      return 7;
    case 'mercury':
      return 8;
    case 'moon':
      return 9;
    default:
      return 4;
  }
};
