import React from 'react';

import { observer } from 'mobx-react-lite';

import { IGameUser, store } from '../../store';
import { Styled } from './styled';

interface Props {
  player: IGameUser;
}

export const PlayerCell: React.FC<Props> = observer(({ player }) => {
  const isCurrentPlayer = store.gameUser && player?.id === store.gameUser?.id;

  return (
    <Styled.PlayerCell isCurrentPlayer={isCurrentPlayer}>
      <Styled.PlayerName>{player.displayName}</Styled.PlayerName>
    </Styled.PlayerCell>
  );
});
