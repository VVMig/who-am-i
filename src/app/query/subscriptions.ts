import { gql } from '@apollo/client';

export const NEW_GAMEUSER = gql`
  subscription {
    newGameUser {
      id
      room {
        id
      }
    }
  }
`;
