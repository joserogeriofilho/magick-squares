import { describe, expect, test } from 'vitest';
import { normalizeString } from './utils';

describe('normalizeString', () => {
  test('should remove accents', () => {
    expect(normalizeString('áãâàéêíìúû')).toBe('aaaaeeiiuu');
  });

  test('should remove blank spaces', () => {
    expect(normalizeString('áãâà éê íì úû')).toBe('aaaaeeiiuu');
  });

  test('should remove special characters', () => {
    expect(normalizeString('á%ã$â@à`~;./?!*()[]-_+= éê íì úû ç')).toBe(
      'aaaaeeiiuuc'
    );
  });
});
