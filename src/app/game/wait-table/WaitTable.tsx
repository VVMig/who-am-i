import React from 'react';

import { observer } from 'mobx-react-lite';
import { v4 } from 'uuid';

import { useCustomTranslation } from '../../hooks';
import { IGameUser, store } from '../../store';
import { Header } from './Header';
import { PlayerCell } from './PlayerCell';
import { Styled } from './styled';

const renderPlayerCells = (
  participants: IGameUser[],
  maxParticipants: number
) => {
  const cells: JSX.Element[] = [];

  for (let index = 0; index < maxParticipants; index++) {
    cells.push(
      <PlayerCell
        key={v4()}
        player={index < participants.length ? participants[index] : undefined}
      />
    );
  }

  return cells;
};

export const WaitTable = observer(() => {
  const { t } = useCustomTranslation();

  const playerCells = renderPlayerCells(
    store.room.participants,
    store.room.maxParticipants
  );

  return (
    <Styled.WaitTableContainer>
      <Styled.WaitTable>
        <Header />
        <Styled.Body>{playerCells}</Styled.Body>
        <Styled.Footer>
          {store.room.participants.length === store.room.maxParticipants && (
            <Styled.StartButton>{t('game.startGame')}</Styled.StartButton>
          )}
        </Styled.Footer>
      </Styled.WaitTable>
    </Styled.WaitTableContainer>
  );
});
