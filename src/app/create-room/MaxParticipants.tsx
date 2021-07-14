import React from 'react';

import { fillProcent } from '../../utils';
import { useCustomTranslation } from '../hooks';
import { Translation } from '../Translation';
import { Styled } from './styled';

interface Props {
  maxLimit: number;
  minLimit: number;
  currentValue: number;
  defaultValue: number;
  onChangeRange: React.FormEventHandler<HTMLInputElement>;
}

export const MaxParticipants: React.FC<Props> = ({
  maxLimit,
  minLimit,
  currentValue,
  defaultValue,
  onChangeRange,
}) => {
  const { t } = useCustomTranslation();

  return (
    <Styled.MaxParticipants>
      <Styled.MaxParticipantsTitle>
        {t(Translation.participants)}: {currentValue}
      </Styled.MaxParticipantsTitle>
      <Styled.MaxParticipantsRange
        min={minLimit}
        max={maxLimit}
        defaultValue={defaultValue}
        onChange={onChangeRange}
      />
      <Styled.RangeValueContainer>
        <Styled.RangeValue
          leftPercentage={fillProcent(maxLimit, minLimit, currentValue)}
        >
          <h4>
            {currentValue}
            <span></span>
          </h4>
        </Styled.RangeValue>
      </Styled.RangeValueContainer>
    </Styled.MaxParticipants>
  );
};
