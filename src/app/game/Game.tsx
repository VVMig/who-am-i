import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import { useCookies } from 'react-cookie';

import { Spinner } from '../../packages';
import { CookiesEnum } from '../CookiesEnum';
import { useQueryParams } from '../hooks';
import { GetRoomQuery, GET_ROOM } from '../query';
import { store } from '../store';
import { Styled } from './styled';
import { WaitTable } from './wait-table/WaitTable';

export const Game = observer(() => {
  const [cookies] = useCookies();
  const shareId = useQueryParams('id');

  const { data: initialRoom, loading } = useQuery<GetRoomQuery>(GET_ROOM, {
    variables: {
      shareId,
    },
  });

  useEffect(() => {
    if (initialRoom?.getRoom) {
      store.setRoom(initialRoom.getRoom);

      if (cookies[CookiesEnum.GameAuth]) {
        store.setGameUser(cookies[CookiesEnum.GameAuth].gameUserId);
      }
    }
  }, [initialRoom]);

  return (
    <Styled.GameContainer>
      {loading ? <Spinner /> : <WaitTable />}
    </Styled.GameContainer>
  );
});
