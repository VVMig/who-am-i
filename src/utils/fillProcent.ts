export const fillProcent = (
  maxValue: number,
  minValue: number,
  currentValue: number
) => {
  const rangeCount = maxValue - minValue;
  const procent = 100;
  const procentInOneStep = procent / rangeCount;

  return (rangeCount - (maxValue - currentValue)) * procentInOneStep;
};
