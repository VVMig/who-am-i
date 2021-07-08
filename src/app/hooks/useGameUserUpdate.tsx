import { useEffect } from 'react';

import { useQuery, useSubscription } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

import { CookiesEnum } from '../CookiesEnum';
import {
  GameUserUpdateSubscription,
  GAMEUSER_KICKED,
  GAMEUSER_UPDATE,
  GetRoomQuery,
  GET_ROOM,
  IKickedGameUser,
} from '../query';
import { RoutesEnum } from '../RoutesEnum';
import { store } from '../store';
import { useQueryParams } from './useQueryParams';

export const useGameUserUpdate = () => {
  const history = useHistory();

  const [cookies] = useCookies();
  const shareId = useQueryParams('id');

  const { loading, refetch } = useQuery<GetRoomQuery>(GET_ROOM, {
    variables: {
      shareId,
    },
  });

  const initialQuery = async () => {
    try {
      const { data } = await refetch();

      store.setRoom(data.getRoom);
      store.setGameUser(cookies[CookiesEnum.GameAuth].gameUserId);
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  const { data: updatedRoom, error: updatedError } =
    useSubscription<GameUserUpdateSubscription>(GAMEUSER_UPDATE);
  const { data: kickedUser, error: kickedError } =
    useSubscription<IKickedGameUser>(GAMEUSER_KICKED);

  useEffect(() => {
    initialQuery();
  }, []);

  useEffect(() => {
    if (updatedError) {
      store.error.setError(updatedError.message);
    } else if (updatedRoom?.gameUserUpdate) {
      store.setRoom(updatedRoom.gameUserUpdate);
    }
  }, [updatedRoom]);

  useEffect(() => {
    if (kickedError) {
      store.error.setError(kickedError.message);
    } else if (
      store.gameUser &&
      kickedUser?.kickedGameUser === store.gameUser?.id
    ) {
      history.push(RoutesEnum.Home);
    }
  }, [kickedUser]);

  return {
    initialLoading: loading,
    refetch,
  };
};
