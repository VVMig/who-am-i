import React from 'react';

import { useCustomTranslation } from '../../../hooks';
import { Styled } from './styled';

export const QuestionBody = () => {
  const { t } = useCustomTranslation();

  return (
    <>
      <Styled.PlayerName>{t('game.you')}</Styled.PlayerName>
      <Styled.QuestionContainer>
        <Styled.QuestionInput />
        <Styled.QuestionButton>{t('game.askButton')}</Styled.QuestionButton>
      </Styled.QuestionContainer>
    </>
  );
};
