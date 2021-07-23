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

export const QUESTION_UPDATE = gql`
  subscription QuestionUpdate($shareId: String) {
    questionUpdate(shareId: $shareId) {
      ${roomFields}
    }
  }
`;

export const GAMEUSER_KICKED = gql`
  subscription KickedGameUser($id: String) {
    kickedGameUser(id: $id)
  }
`;
