import React from 'react';

import { observer } from 'mobx-react-lite';
import { v4 } from 'uuid';

import { useCustomTranslation } from '../../hooks';
import { store } from '../../store';
import { Header } from './Header';
import { PlayerCell } from './PlayerCell';
import { Styled } from './styled';

export const WaitTable = observer(() => {
  const { t } = useCustomTranslation();

  const playerCells = () => {
    const cells: JSX.Element[] = [];

    for (let index = 0; index < store.room.maxParticipants; index++) {
      cells.push(
        <PlayerCell
          key={v4()}
          player={
            index < store.room.participants.length
              ? store.room.participants[index]
              : undefined
          }
        />
      );
    }

    return cells;
  };

  return (
    <Styled.WaitTableContainer>
      <Styled.WaitTable>
        <Header />
        <Styled.Body>{playerCells()}</Styled.Body>
        <Styled.Footer>
          {store.room.participants.length === store.room.maxParticipants && (
            <Styled.StartButton>{t('game.startGame')}</Styled.StartButton>
          )}
        </Styled.Footer>
      </Styled.WaitTable>
    </Styled.WaitTableContainer>
  );
});
