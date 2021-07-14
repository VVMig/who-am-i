import React from 'react';

import { observer } from 'mobx-react-lite';

import { useCustomTranslation } from '../../hooks';
import { IGameUser, store } from '../../store';
import { Translation } from '../../Translation';
import { NameModal } from './NameModal';
import { Styled } from './styled';

interface Props {
  player: IGameUser;
}

export const PlayerCell: React.FC<Props> = observer(({ player }) => {
  const { t } = useCustomTranslation();

  const isCurrentPlayer = store.gameUser && player?.id === store.gameUser?.id;

  return (
    <Styled.PlayerCell
      isCurrentPlayer={isCurrentPlayer}
      isNaming={store.room.nowNaming?.id === player.id}
      isNameSelect={!!player.guessName}
    >
      <Styled.PlayerName>{player.displayName}</Styled.PlayerName>
      {isCurrentPlayer && store.room.nameSeter?.id === store.gameUser?.id && (
        <NameModal />
      )}
      <Styled.StatusText>
        {player.guessName ? t(Translation.game.nameSelected) : ''}
      </Styled.StatusText>
    </Styled.PlayerCell>
  );
});
