import React, { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { Button, Spinner } from '../../packages';
import {
  CREATE_ROOM,
  CreatRoomQuery,
  GetRangeParticipantsQuery,
  GET_RANGE_PARTICIPANTS,
} from '../query';
import { RoutesEnum } from '../RoutesEnum';
import { MaxParticipants } from './MaxParticipants';
import { Styled } from './styled';

const defaultMaxParticipants = 2;

export const CreateRoom = () => {
  const history = useHistory();

  const [createRoom, { data: roomData, loading: roomLoading }] =
    useMutation<CreatRoomQuery>(CREATE_ROOM);

  const { data: rangeData, loading: rangeLoading } =
    useQuery<GetRangeParticipantsQuery>(GET_RANGE_PARTICIPANTS);

  const [maxParticipants, setMaxParticipants] = useState<number>(
    defaultMaxParticipants
  );

  const onClickBackToMenu = () => {
    history.push(RoutesEnum.Home);
  };

  const onChangeRange: React.FormEventHandler<HTMLInputElement> = (event) => {
    setMaxParticipants(+event.currentTarget.value);
  };

  const onClickCreateRoom = () => {
    createRoom({
      variables: {
        maxParticipants,
      },
    });
  };

  useEffect(() => {
    if (rangeData) {
      setMaxParticipants(Number(rangeData.getRangeParticipants.defaultValue));
    }
  }, [rangeData]);

  return (
    <Styled.CreateRoom isLoading={rangeLoading || roomLoading}>
      {rangeLoading || roomLoading ? (
        <Spinner />
      ) : (
        <>
          <Styled.Title>Room options</Styled.Title>
          {rangeData?.getRangeParticipants && (
            <MaxParticipants
              maxLimit={rangeData.getRangeParticipants.max}
              minLimit={rangeData.getRangeParticipants.min}
              currentValue={maxParticipants}
              defaultValue={rangeData.getRangeParticipants.defaultValue}
              onChangeRange={onChangeRange}
            />
          )}
          <Button onClick={onClickCreateRoom}>Create room</Button>
          <Button onClick={onClickBackToMenu}>Back to menu</Button>
        </>
      )}
    </Styled.CreateRoom>
  );
};
