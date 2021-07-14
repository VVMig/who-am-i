import { gql } from '@apollo/client';

import { roomFields } from './queryAllFields';

export const GAMEUSER_UPDATE = gql`
  subscription GameUserUpdate($shareId: String) {
    gameUserUpdate(shareId: $shareId) {
      ${roomFields}
    }
  }
`;

export const ROOM_STAGE = gql`
  subscription RoomStage($shareId: String) {
    roomStage(shareId: $shareId) {
      ${roomFields}
    }
  }
`;

export const GAMEUSER_KICKED = gql`
  subscription KickedGameUser($id: String) {
    kickedGameUser(id: $id)
  }
`;
