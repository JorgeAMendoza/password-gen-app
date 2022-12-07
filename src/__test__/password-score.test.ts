import { describe, expect, it } from 'vitest';
import passwordScore from '../utils/password-score';

describe('calculating the score of a password based on the options provided to the password geneator', () => {
  it('minimum length, with only lowercase returns score of 1', () => {
    const score = passwordScore(8, false, true, false, false);
    expect(score).toBe(1);
  });

  it('max length, all password options selected, returns score of 4', () => {
    const score = passwordScore(20, true, true, true, true);
    expect(score).toBe(4);
  });

  it('middle length, half of the password options selected, returns score of 2', () => {
    const score = passwordScore(14, true, true, false, false);
    expect(score).toBe(2);
  });

  it('middle score, three password options selected, returns score of 3', () => {
    const score = passwordScore(14, true, true, true, false);
    expect(score).toBe(3);
  });

  it('length of 19, all password options selected, returns score of 4', () => {
    const score = passwordScore(19, true, true, true, true);
    expect(score).toBe(4);
  });

  it('length of 16, all options selected, returns a score of 3', () => {
    const score = passwordScore(16, true, true, true, true);
    expect(score).toBe(3);
  });
});
