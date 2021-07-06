import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { Spinner } from '../../packages';
import { useGameUserUpdate } from '../hooks';
import { Styled } from './styled';
import { WaitTable } from './wait-table/WaitTable';

export const Game = observer(() => {
  const { initialLoading, refetch } = useGameUserUpdate();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Styled.GameContainer>
      {initialLoading ? <Spinner /> : <WaitTable />}
    </Styled.GameContainer>
  );
});
