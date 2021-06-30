/* eslint-disable no-magic-numbers */
import { fillProcent } from '../fillProcent';

describe('Fill procent function', () => {
  it('Should return correct value if min equals 0', () => {
    const max = 5;
    const min = 0;
    const currentValue = 1;

    expect(fillProcent(max, min, currentValue)).toEqual(20);
  });

  it('Should return correct value if curent value non equls min and max values', () => {
    const max = 110;
    const min = 10;
    const currentValue = 25;

    expect(fillProcent(max, min, currentValue)).toEqual(15);
  });

  it('Should return correct value if current value equals min value', () => {
    const max = 8;
    const min = 2;
    const currentValue = 2;

    expect(fillProcent(max, min, currentValue)).toEqual(0);
  });

  it('Should return correct value if current value equals max value', () => {
    const max = 150;
    const min = 2;
    const currentValue = 150;

    expect(fillProcent(max, min, currentValue)).toEqual(100);
  });
});
