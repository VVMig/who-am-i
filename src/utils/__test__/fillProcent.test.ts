/* eslint-disable no-magic-numbers */
import { fillProcent } from '../fillProcent';

describe('Fill procent function', () => {
  it('Should return correct value', () => {
    const max = 5;
    const min = 0;
    const currentValue = 1;

    expect(fillProcent(max, min, currentValue)).toEqual(20);
  });

  it('Should return correct value', () => {
    const max = 100;
    const min = 0;
    const currentValue = 25;

    expect(fillProcent(max, min, currentValue)).toEqual(currentValue);
  });

  it('Should return correct value', () => {
    const max = 8;
    const min = 2;
    const currentValue = 5;

    expect(fillProcent(max, min, currentValue)).toEqual(50);
  });

  it('Should return correct value', () => {
    const max = 8;
    const min = 2;
    const currentValue = 8;

    expect(fillProcent(max, min, currentValue)).toEqual(100);
  });

  it('Should return correct value', () => {
    const max = 150;
    const min = 2;
    const currentValue = 150;

    expect(fillProcent(max, min, currentValue)).toEqual(100);
  });
});
