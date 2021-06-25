import { gql } from '@apollo/client';

export const CREATE_ROOM = gql`
  mutation CreateRoom($maxParticipants: String) {
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
