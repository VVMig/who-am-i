import { gql } from '@apollo/client';

export const GAMEUSER_UPDATE = gql`
  subscription {
    gameUserUpdate {
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
  subscription {
    kickedGameUser
  }
`;
