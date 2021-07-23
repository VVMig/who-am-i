import { useEffect } from 'react';

import { useQuery, useSubscription } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import {
  AUTHORIZATION,
  AuthorizationQuery,
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

  const shareId = useQueryParams('id');

  const { loading, refetch } = useQuery<GetRoomQuery>(GET_ROOM, {
    variables: {
      shareId,
    },
  });
  const { data } = useQuery<AuthorizationQuery>(AUTHORIZATION);

  const initialQuery = async () => {
    try {
      const { data: room } = await refetch();

      store.setRoom(room.getRoom);
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  const { data: updatedRoom, error: updatedError } =
    useSubscription<GameUserUpdateSubscription>(GAMEUSER_UPDATE, {
      variables: {
        shareId,
      },
    });
  const { data: kickedUser, error: kickedError } =
    useSubscription<IKickedGameUser>(GAMEUSER_KICKED, {
      variables: {
        id: store.gameUser?.id,
      },
    });

  useEffect(() => {
    if (data?.authorize) {
      store.setGameUser(data.authorize);
      initialQuery();
    }
  }, [data]);

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
