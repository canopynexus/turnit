import { describe, expect, it } from 'vitest';

import { rentPerMonth, rentPerWeek } from './rent';

describe('rent', () => {
  it('should given 100 pw return pcm 433.33', () => {
    expect(rentPerMonth(100)).toEqual((100 * 52) / 12);
  });
  it('should given 1000 pcm return pw 230.76', () => {
    expect(rentPerWeek(1000)).toEqual((1000 / 52) * 12);
  });
  it('should given 300 pw return pcm 1300', () => {
    expect(rentPerMonth(300)).toEqual(1300);
  });
  it('should given 1300 pcm return pw 300', () => {
    expect(rentPerWeek(1300)).toEqual(300);
  });
});
