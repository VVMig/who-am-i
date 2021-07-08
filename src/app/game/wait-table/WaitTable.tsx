import React from 'react';

import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import { v4 } from 'uuid';

import { useCustomTranslation } from '../../hooks';
import { IWaitStageNextQuery, WAIT_STAGE_NEXT } from '../../query';
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

  const [waitStageNext] = useMutation<IWaitStageNextQuery>(WAIT_STAGE_NEXT);

  const onClickStartButton = async () => {
    try {
      await waitStageNext();
    } catch (error) {
      store.error.setError(error.message);
    }
  };

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
          {store.room.participants.length !== store.room.maxParticipants && (
            <Styled.StartButton onClick={onClickStartButton}>
              {t('game.goToNameStage')}
            </Styled.StartButton>
          )}
        </Styled.Footer>
      </Styled.WaitTable>
    </Styled.WaitTableContainer>
  );
});
