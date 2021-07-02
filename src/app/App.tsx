import React, { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { ConfirmModal } from '../packages';
import { ErrorAlert } from './error-alert';
import { useCustomTranslation } from './hooks';
import { Header } from './layout';
import {
  IsRoomExistQuery,
  IS_ROOM_EXIST,
  LEAVE_ROOM,
  ReconnectRoomQuery,
  RECONNECT_ROOM,
} from './query';
import { RoutesEnum } from './RoutesEnum';
import { RoutesSwitch } from './RoutesSwitch';
import { store } from './store';

export const App = () => {
  const { t } = useCustomTranslation();

  const [isModalShow, setIsModalShow] = useState(false);
  const history = useHistory();

  const [reconnectRoom] = useMutation<ReconnectRoomQuery>(RECONNECT_ROOM);
  const [leaveRoom] = useMutation(LEAVE_ROOM);
  const { data, loading, error } = useQuery<IsRoomExistQuery>(IS_ROOM_EXIST);

  const leave = async () => {
    try {
      await leaveRoom();
      setIsModalShow(false);
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  const reconnect = async () => {
    try {
      const { data } = await reconnectRoom();

      setIsModalShow(false);
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

    if (
      data?.isRoomExist &&
      !loading &&
      history.location.pathname !== RoutesEnum.Game
    ) {
      setIsModalShow(true);
    }
  }, [data, error]);

  return (
    <>
      {isModalShow && (
        <ConfirmModal
          text={t('app.reconnectConfirm')}
          onClickDenied={leave}
          onClickConfirm={reconnect}
          handleModalClose={leave}
        />
      )}
      <ErrorAlert />
      <Header />
      <RoutesSwitch />
    </>
  );
};
