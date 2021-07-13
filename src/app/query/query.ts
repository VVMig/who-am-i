import { gql } from '@apollo/client';

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
      shareId
      participants {
        id
        displayName
        guessName
        isAdmin
        isFinish
      }
      maxParticipants
      gameStage
    }
  }
`;

export const IS_ROOM_EXIST = gql`
  query {
    isRoomExist
  }
`;
