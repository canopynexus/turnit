import { describe, expect, it } from 'vitest';

import { findByCountryCode } from './emoji-flags';

describe('emoji-flags', () => {
  describe('sunny tests', () => {
    it('tests GB', () => {
      const GB = 'GB';
      const emojiFlag = findByCountryCode(GB);
      expect(emojiFlag).toBeDefined();
      expect(emojiFlag?.alpha2).toEqual(GB);
    });
  });
  describe('rainy tests', () => {
    it('tests GBR', () => {
      const emojiFlag = findByCountryCode('GBR');
      expect(emojiFlag).toBe(null);
    });
    it('throws error: missing parameter', () => {
      const alpha2 = undefined;
      expect(() => {
        //@ts-expect-error undefined
        findByCountryCode(alpha2);
      }).toThrow();
    });
    it('throws error: wrong parameter type', () => {
      const alpha2 = 2;
      expect(() => {
        //@ts-expect-error not assignable
        findByCountryCode(alpha2);
      }).toThrow();
    });
  });
});
