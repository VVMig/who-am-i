import { gql } from '@apollo/client';

import { roomFields } from './queryAllFields';

export const GET_RANGE_PARTICIPANTS = gql`
  query {
    getRangeParticipants {
      max
      min
      defaultValue
    }
  }
`;

export const GET_ROOM = gql`
  query GetRoom($shareId: String!) {
    getRoom(shareId: $shareId) {
      ${roomFields}
    }
  }
`;

export const IS_ROOM_EXIST = gql`
  query {
    isRoomExist
  }
`;
