import React from 'react';

import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';

import { useCustomTranslation } from '../../hooks';
import { NAME_STAGE_NEXT } from '../../query';
import { store } from '../../store';
import { Translation } from '../../Translation';
import { Header } from './Header';
import { PlayerCell } from './PlayerCell';
import { Styled } from './styled';

export const NameTable = observer(() => {
  const [nextStage] = useMutation(NAME_STAGE_NEXT);

  const { t } = useCustomTranslation();

  const onClickStartGame = async () => {
    try {
      await nextStage();
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  return (
    <Styled.NameTableContainer>
      <Styled.NameTable>
        <Header />
        <Styled.Body>
          {store.room.participants.map((participant) => (
            <PlayerCell player={participant} key={participant.id} />
          ))}
        </Styled.Body>
        <Styled.Footer>
          {store.gameUser?.isAdmin && store.room.isAllHaveGuessName && (
            <Styled.StartButton onClick={onClickStartGame}>
              {t(Translation.game.startGame)}
            </Styled.StartButton>
          )}
        </Styled.Footer>
      </Styled.NameTable>
    </Styled.NameTableContainer>
  );
});
