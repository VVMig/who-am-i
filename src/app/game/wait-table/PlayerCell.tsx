import React from 'react';

import { observer } from 'mobx-react-lite';

import { PlayerSpinner } from '../../../packages';
import { useCustomTranslation } from '../../hooks';
import { IGameUser, store } from '../../store';
import { Styled } from './styled';

interface Props {
  player?: IGameUser;
}

export const PlayerCell: React.FC<Props> = observer(({ player }) => {
  const { t } = useCustomTranslation();

  const isCurrentPlayer = player?.id === store.gameUser?.id;

  return (
    <Styled.PlayerCell
      isCurrentPlayer={isCurrentPlayer}
      isAdmin={player?.isAdmin}
    >
      {player ? (
        <>
          <Styled.PlayerName>{player.displayName}</Styled.PlayerName>
          {!isCurrentPlayer && store.gameUser?.isAdmin && (
            <Styled.KickPlayer>{t('game.kickPlayer')}</Styled.KickPlayer>
          )}
          {player.isAdmin && (
            <Styled.AdminText>{t('game.admin')}</Styled.AdminText>
          )}
        </>
      ) : (
        <>
          <Styled.WaitText>{t('game.waiting')}...</Styled.WaitText>
          <PlayerSpinner />
        </>
      )}
    </Styled.PlayerCell>
  );
});
