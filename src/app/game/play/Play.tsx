import React from 'react';

import { observer } from 'mobx-react-lite';

import { store } from '../../store';
import { PlayerCard } from './player-card/PlayerCard';
import { Styled } from './styled';

export const Play = observer(() => {
  return (
    <Styled.PlayContainer>
      {store.room.participants.map((participant) => (
        <PlayerCard player={participant} />
      ))}
    </Styled.PlayContainer>
  );
});
