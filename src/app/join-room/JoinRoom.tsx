import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { Button } from '../../packages';
import { useCustomTranslation } from '../hooks';
import { JoinRoomQuery, JOIN_ROOM } from '../query';
import { RoutesEnum } from '../RoutesEnum';
import { store } from '../store';
import { Styled } from './styled';

export const JoinRoom = observer(() => {
  const { t } = useCustomTranslation();

  const [shareId, setShareId] = useState('');

  const history = useHistory();

  const [joinRoom] = useMutation<JoinRoomQuery>(JOIN_ROOM);

  const onClickBackToMenu = () => {
    history.push(RoutesEnum.Home);
  };

  const onClickJoinRoom = async () => {
    if (!shareId.trim()) {
      return;
    }

    try {
      const { data } = await joinRoom({
        variables: {
          shareId,
        },
      });

      if (data?.joinRoom) {
        history.push(`${RoutesEnum.Game}?id=${data.joinRoom.shareId}`);
      }
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  return (
    <Styled.JoinRoom>
      <Styled.Title>{t('joinRoom.title')}</Styled.Title>
      <Styled.RoomIdInput
        placeholder={t('joinRoom.title')}
        maxLength={6}
        onChange={(e) => setShareId(e.currentTarget.value)}
        value={shareId}
      />
      <Button onClick={onClickJoinRoom}>{t('menu.joinRoom')}</Button>
      <Button onClick={onClickBackToMenu}>{t('createRoom.backToMenu')}</Button>
    </Styled.JoinRoom>
  );
});
