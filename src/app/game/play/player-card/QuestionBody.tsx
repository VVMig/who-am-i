import React from 'react';

import { useCustomTranslation } from '../../../hooks';
import { Translation } from '../../../Translation';
import { Styled } from './styled';

export const QuestionBody = () => {
  const { t } = useCustomTranslation();

  return (
    <>
      <Styled.PlayerName>{t(Translation.game.you)}</Styled.PlayerName>
      <Styled.QuestionContainer>
        <Styled.QuestionInput />
        <Styled.QuestionButton>
          {t(Translation.game.askButton)}
        </Styled.QuestionButton>
      </Styled.QuestionContainer>
    </>
  );
};
