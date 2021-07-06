import { useEffect } from 'react';

import { useQuery, useSubscription } from '@apollo/client';
import { useCookies } from 'react-cookie';

import { CookiesEnum } from '../CookiesEnum';
import {
  GameUserUpdateSubscription,
  GAMEUSER_UPDATE,
  GetRoomQuery,
  GET_ROOM,
} from '../query';
import { store } from '../store';
import { useQueryParams } from './useQueryParams';

export const useGameUserUpdate = () => {
  const [cookies] = useCookies();
  const shareId = useQueryParams('id');

  const {
    data: initialRoom,
    loading,
    error,
    refetch,
  } = useQuery<GetRoomQuery>(GET_ROOM, {
    variables: {
      shareId,
    },
  });

  const { data: updatedRoom, error: updatedError } =
    useSubscription<GameUserUpdateSubscription>(GAMEUSER_UPDATE);

  useEffect(() => {
    if (error) {
      store.error.setError(error.message);
    } else if (initialRoom?.getRoom) {
      store.setRoom(initialRoom.getRoom);
      if (cookies[CookiesEnum.GameAuth]) {
        store.setGameUser(cookies[CookiesEnum.GameAuth].gameUserId);
      }
    }
  }, [initialRoom]);

  useEffect(() => {
    if (updatedError) {
      store.error.setError(updatedError.message);
    } else if (updatedRoom?.gameUserUpdate) {
      store.setRoom(updatedRoom.gameUserUpdate);
    }
  }, [updatedRoom]);

  return {
    initialLoading: loading,
    refetch,
  };
};
