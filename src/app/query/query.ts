import { gql } from '@apollo/client';

export const GET_RANGE_PARTICIPANTS = gql`
  query {
    getRangeParticipants {
      max
      min
      defaultValue
    }
  }
`;
