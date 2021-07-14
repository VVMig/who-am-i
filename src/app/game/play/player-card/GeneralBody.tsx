import React from 'react';

import { Styled } from './styled';

interface Props {
  displayName: string;
  guessName?: string | null;
}

export const GeneralBody: React.FC<Props> = ({ displayName, guessName }) => {
  return (
    <>
      <Styled.PlayerName>{displayName}</Styled.PlayerName>
      <Styled.GuessNameContainer>
        <Styled.GuessName>{guessName}</Styled.GuessName>
      </Styled.GuessNameContainer>
    </>
  );
};
