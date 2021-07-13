import React from 'react';

import { observer } from 'mobx-react-lite';

import { useCustomTranslation } from '../../hooks';
import { store } from '../../store';
import { Header } from './Header';
import { PlayerCell } from './PlayerCell';
import { Styled } from './styled';

export const NameTable = observer(() => {
  const { t } = useCustomTranslation();

  return (
    <Styled.NameTableContainer>
      <Styled.NameTable>
        <Header />
        <Styled.Body>
          {store.room.participants.map((participant) => (
            <PlayerCell player={participant} />
          ))}
        </Styled.Body>
        <Styled.Footer>
          {store.gameUser?.isAdmin && (
            <Styled.StartButton>{t('game.startGame')}</Styled.StartButton>
          )}
        </Styled.Footer>
      </Styled.NameTable>
    </Styled.NameTableContainer>
  );
});
