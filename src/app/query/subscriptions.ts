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
      }
      maxParticipants
    }
  }
`;

export const GAMEUSER_KICKED = gql`
  subscription KickedGameUser($id: String) {
    kickedGameUser(id: $id)
  }
`;
