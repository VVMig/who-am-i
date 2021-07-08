import React from 'react';

import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';

import { PlayerSpinner } from '../../../packages';
import { useCustomTranslation } from '../../hooks';
import { KICK_PLAYER } from '../../query';
import { IGameUser, store } from '../../store';
import { Styled } from './styled';

interface Props {
  player?: IGameUser;
}

export const PlayerCell: React.FC<Props> = observer(({ player }) => {
  const { t } = useCustomTranslation();
  const [kickPlayer] = useMutation(KICK_PLAYER, {
    variables: {
      id: player?.id,
    },
  });

  const onClickKick = async () => {
    try {
      await kickPlayer();
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  const isCurrentPlayer = store.gameUser && player?.id === store.gameUser?.id;

  return (
    <Styled.PlayerCell
      isCurrentPlayer={isCurrentPlayer}
      isAdmin={player?.isAdmin}
    >
      {player ? (
        <>
          <Styled.PlayerName>{player.displayName}</Styled.PlayerName>
          {!isCurrentPlayer && store.gameUser?.isAdmin && (
            <Styled.KickPlayer onClick={onClickKick}>
              {t('game.kickPlayer')}
            </Styled.KickPlayer>
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
