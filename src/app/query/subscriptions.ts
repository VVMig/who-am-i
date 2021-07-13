import { gql } from '@apollo/client';

export const GAMEUSER_UPDATE = gql`
  subscription GameUserUpdate($shareId: String) {
    gameUserUpdate(shareId: $shareId) {
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

export const ROOM_STAGE = gql`
  subscription RoomStage($shareId: String) {
    roomStage(shareId: $shareId) {
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

export const GAMEUSER_KICKED = gql`
  subscription KickedGameUser($id: String) {
    kickedGameUser(id: $id)
  }
`;
