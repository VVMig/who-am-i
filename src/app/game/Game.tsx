import React from 'react';

import { observer } from 'mobx-react-lite';

import { Spinner } from '../../packages';
import { GameStage } from '../GameStage';
import { useGameStageUpdate, useGameUserUpdate } from '../hooks';
import { store } from '../store';
import { NameTable } from './name-table/NameTable';
import { Play } from './play/Play';
import { Styled } from './styled';
import { WaitTable } from './wait-table/WaitTable';

const gameStageSwitch = (gameStage: GameStage) => {
  switch (gameStage) {
    case GameStage.WAIT_STAGE:
      return <WaitTable />;
    case GameStage.NAME_STAGE:
      return <NameTable />;
    case GameStage.PLAY_STAGE:
      return <Play />;
    default:
      return null;
  }
};

export const Game = observer(() => {
  const { initialLoading } = useGameUserUpdate();

  useGameStageUpdate();

  return (
    <Styled.GameContainer>
      {initialLoading ? <Spinner /> : gameStageSwitch(store.room.gameStage)}
    </Styled.GameContainer>
  );
});
