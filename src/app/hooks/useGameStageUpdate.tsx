import { useEffect } from 'react';

import { useSubscription } from '@apollo/client';

import { RoomStageSubscription, ROOM_STAGE } from '../query';
import { store } from '../store';
import { useQueryParams } from './useQueryParams';

export const useGameStageUpdate = () => {
  const shareId = useQueryParams('id');

  const { data: roomStage, error } = useSubscription<RoomStageSubscription>(
    ROOM_STAGE,
    {
      variables: { shareId },
    }
  );

  useEffect(() => {
    if (error) {
      store.error.setError(error.message);
    } else if (roomStage?.roomStage) {
      store.setRoom(roomStage.roomStage);
    }
  }, [roomStage, error]);
};
