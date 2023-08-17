import { sum } from '../../lib/utils';

describe('utils', () => {
  describe('sum()', () => {
    it('returns the sum of two numbers', () => {
      expect(sum(40, 7)).toBe(47);
      expect(sum(3, 1)).toBe(4);
    });

    it('returns the sum of several numbers', () => {
      expect(sum(1, 3, 31, 31)).toBe(66);
      expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).toEqual(45);
    });
  });
});
