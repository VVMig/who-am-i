import { gql } from '@apollo/client';

export const CREATE_ROOM = gql`
  mutation CreateRoom($maxParticipants: Int) {
    createRoom(maxParticipants: $maxParticipants) {
      id
      shareId
      participants {
        id
      }
      maxParticipants
    }
  }
`;
