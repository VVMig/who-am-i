import React, { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';

import { Button, Spinner } from '../../packages';
import {
  CREATE_ROOM,
  CreatRoomQuery,
  GetRangeParticipantsQuery,
  GET_RANGE_PARTICIPANTS,
} from '../query';
import { Styled } from './styled';

export const CreateRoom = () => {
  const [createRoom, { data: roomData, loading: roomLoading }] =
    useMutation<CreatRoomQuery>(CREATE_ROOM);

  const { data: rangeData, loading: rangeLoading } =
    useQuery<GetRangeParticipantsQuery>(GET_RANGE_PARTICIPANTS);

  const [maxParticipants, setMaxParticipants] = useState<null | number>(null);

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
          <Styled.MaxParticipants>
            <Styled.RangeValue>{maxParticipants}</Styled.RangeValue>
            <Styled.MaxParticipantsRange
              min={rangeData?.getRangeParticipants.min}
              max={rangeData?.getRangeParticipants.max}
              defaultValue={rangeData?.getRangeParticipants.defaultValue}
              onChange={onChangeRange}
            />
          </Styled.MaxParticipants>
          <Button onClick={onClickCreateRoom}>Create room</Button>
        </>
      )}
    </Styled.CreateRoom>
  );
};
