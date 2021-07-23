import React from 'react';

import { useCustomTranslation } from '../../../hooks';
import { Translation } from '../../../Translation';
import { Styled } from './styled';

interface Props {
  displayName: string;
  guessName?: string | null;
  isFinish: boolean;
}

export const GeneralBody: React.FC<Props> = ({
  displayName,
  guessName,
  isFinish,
}) => {
  const { t } = useCustomTranslation();

  return (
    <>
      <Styled.PlayerName>{displayName}</Styled.PlayerName>
      <Styled.GuessNameContainer>
        <Styled.GuessName>{guessName}</Styled.GuessName>
        {isFinish && (
          <Styled.Finish>{t(Translation.game.guessed)}</Styled.Finish>
        )}
      </Styled.GuessNameContainer>
    </>
  );
};
