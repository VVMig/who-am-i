import React from 'react';

import { observer } from 'mobx-react-lite';
import { v4 } from 'uuid';

import { icons } from '../../../icons';
import { IGameUser, store } from '../../../store';
import { GeneralBody } from './GeneralBody';
import { QuestionBody } from './QuestionBody';
import { Styled } from './styled';

interface Props {
  player: IGameUser;
  isActive: boolean;
}

const renderCorrectAnswers = (amount = 0) => {
  return Array.from({
    length: amount,
  }).map(() => <Styled.Answer key={v4()}>{icons.Correct}</Styled.Answer>);
};

export const PlayerCard: React.FC<Props> = observer(({ player, isActive }) => {
  const isCurrentPlayer = store.gameUser && player?.id === store.gameUser?.id;

  return (
    <Styled.Card>
      {!isActive && <Styled.CardCover />}
      <Styled.CorrectAnswers>
        {renderCorrectAnswers(player.correctAnswers)}
      </Styled.CorrectAnswers>
      <Styled.UserIcon iconColor={player.color}>
        {icons.UserCircle}
      </Styled.UserIcon>
      {isCurrentPlayer ? (
        <QuestionBody isFinish={player.isFinish} guessName={player.guessName} />
      ) : (
        <GeneralBody
          displayName={player.displayName}
          guessName={player.guessName}
          isFinish={player.isFinish}
        />
      )}
    </Styled.Card>
  );
});
