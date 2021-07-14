import React from 'react';

import { observer } from 'mobx-react-lite';

import { icons } from '../../../icons';
import { IGameUser, store } from '../../../store';
import { GeneralBody } from './GeneralBody';
import { QuestionBody } from './QuestionBody';
import { Styled } from './styled';

interface Props {
  player: IGameUser;
}

export const PlayerCard: React.FC<Props> = observer(({ player }) => {
  const isCurrentPlayer = store.gameUser && player?.id === store.gameUser?.id;

  return (
    <Styled.Card>
      <Styled.UserIcon iconColor={player.color}>
        {icons.UserCircle}
      </Styled.UserIcon>
      {isCurrentPlayer ? (
        <QuestionBody />
      ) : (
        <GeneralBody
          displayName={player.displayName}
          guessName={player.guessName}
        />
      )}
    </Styled.Card>
  );
});
