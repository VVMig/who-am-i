import React from 'react';

import { fillProcent } from '../../utils';
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
  return (
    <Styled.MaxParticipants>
      <Styled.MaxParticipantsTitle>
        Participants: {currentValue}
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
