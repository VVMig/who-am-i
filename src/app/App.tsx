import React, { useEffect } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { ErrorAlert } from './error-alert';
import { Header } from './layout';
import {
  IsRoomExistQuery,
  IS_ROOM_EXIST,
  ReconnectRoomQuery,
  RECONNECT_ROOM,
} from './query';
import { RoutesEnum } from './RoutesEnum';
import { RoutesSwitch } from './RoutesSwitch';
import { store } from './store';

export const App = () => {
  const history = useHistory();

  const [reconnectRoom] = useMutation<ReconnectRoomQuery>(RECONNECT_ROOM);
  const { data, loading, error } = useQuery<IsRoomExistQuery>(IS_ROOM_EXIST);

  const reconnect = async () => {
    try {
      const { data } = await reconnectRoom();

      if (data?.reconnectRoom) {
        history.push(`${RoutesEnum.Game}?id=${data.reconnectRoom.shareId}`);
      }
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      store.error.setError(error.message);
    }

    if (data?.isRoomExist && !loading) {
      reconnect();
    }
  }, [data, error]);

  return (
    <>
      <ErrorAlert />
      <Header />
      <RoutesSwitch />
    </>
  );
};
