import React from 'react';

import { Styled } from './styled';

interface Props {
  className?: string;
}

export const PlayerSpinner: React.FC<Props> = ({ className }) => {
  return (
    <Styled.PlayerSpinner className={className}>
      <Styled.LeftBounce />
      <Styled.MiddleBounce />
      <Styled.RightBounce />
    </Styled.PlayerSpinner>
  );
};
