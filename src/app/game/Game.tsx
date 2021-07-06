import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { observer } from 'mobx-react-lite';

import { Spinner } from '../../packages';
import { useQueryParams } from '../hooks';
import { GetRoomQuery, GET_ROOM } from '../query';
import { store } from '../store';
import { Styled } from './styled';

export const Game = observer(() => {
  const shareId = useQueryParams('id');

  const { data: initialRoom, loading } = useQuery<GetRoomQuery>(GET_ROOM, {
    variables: {
      shareId,
    },
  });

  useEffect(() => {
    if (initialRoom?.getRoom) {
      store.setRoom(initialRoom.getRoom);
    }
  }, [initialRoom]);

  return (
    <Styled.GameContainer>
      {loading ? <Spinner /> : store.room.shareId}
    </Styled.GameContainer>
  );
});
