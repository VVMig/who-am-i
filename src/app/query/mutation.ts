import { gql } from '@apollo/client';

export const CREATE_ROOM = gql`
  mutation CreateRoom($maxParticipants: Int) {
    createRoom(maxParticipants: $maxParticipants) {
      shareId
    }
  }
`;

export const JOIN_ROOM = gql`
  mutation JoinRoom($shareId: String!) {
    joinRoom(shareId: $shareId) {
      shareId
    }
  }
`;
