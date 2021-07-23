import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { useCustomTranslation } from '../../../hooks';
import { QUESTION_SEND } from '../../../query';
import { store } from '../../../store';
import { Translation } from '../../../Translation';
import { Styled } from './styled';

interface Props {
  isFinish: boolean;
  guessName?: string | null;
}

export const QuestionBody: React.FC<Props> = ({ isFinish, guessName }) => {
  const [question, setQuestion] = useState('');
  const { t } = useCustomTranslation();
  const [sendQuestion] = useMutation(QUESTION_SEND);

  const onChangeQuestion: React.FormEventHandler<HTMLInputElement> = (
    event
  ) => {
    setQuestion(event.currentTarget.value);
  };

  const onClickAsk = async () => {
    if (!question.trim()) {
      return;
    }

    try {
      await sendQuestion({
        variables: {
          question,
        },
      });
    } catch (error) {
      store.error.setError(error.message);
    } finally {
      setQuestion('');
    }
  };

  return (
    <>
      <Styled.PlayerName>{t(Translation.game.you)}</Styled.PlayerName>
      {isFinish ? (
        <Styled.GuessNameContainer>
          <Styled.GuessName>{guessName}</Styled.GuessName>
          <Styled.Finish>{t(Translation.game.guessed)}</Styled.Finish>
        </Styled.GuessNameContainer>
      ) : (
        <Styled.QuestionContainer>
          <Styled.QuestionInput value={question} onChange={onChangeQuestion} />
          <Styled.QuestionButton onClick={onClickAsk}>
            {t(Translation.game.askButton)}
          </Styled.QuestionButton>
        </Styled.QuestionContainer>
      )}
    </>
  );
};
