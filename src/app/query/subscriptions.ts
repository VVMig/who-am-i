import { gql } from '@apollo/client';

export const NEW_GAMEUSER = gql`
  subscription {
    newGameUser {
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
