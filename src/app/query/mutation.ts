import { gql } from '@apollo/client';

export const CREATE_ROOM = gql`
  mutation CreateRoom($maxParticipants: Int) {
    createRoom(maxParticipants: $maxParticipants) {
      shareId
    }
  }
`;

export const JOIN_ROOM = gql`
  mutation JoinRoom($shareId: String) {
    joinRoom(shareId: $shareId) {
      shareId
    }
  }
`;

export const LEAVE_ROOM = gql`
  mutation {
    leaveRoom
  }
`;

export const GUESS_NAME = gql`
  mutation GuessName($name: String!, $id: String!) {
    guessName(name: $name, id: $id) {
      shareId
    }
  }
`;

export const RECONNECT_ROOM = gql`
  mutation {
    reconnectRoom {
      shareId
    }
  }
`;

export const KICK_PLAYER = gql`
  mutation KickPlayer($id: String!) {
    kickPlayer(id: $id) {
      shareId
    }
  }
`;

export const NAME_STAGE_NEXT = gql`
  mutation {
    nameStageNext {
      shareId
    }
  }
`;

export const QUESTION_SEND = gql`
  mutation SendQuestion($question: String) {
    sendQuestion(question: $question) {
      shareId
    }
  }
`;

export const WAIT_STAGE_NEXT = gql`
  mutation {
    waitStageNext {
      shareId
    }
  }
`;

export const ANSWER_SEND = gql`
  mutation SendAnswer($answer: Boolean, $isGuessed: Boolean) {
    sendAnswer(answer: $answer, isGuessed: $isGuessed) {
      shareId
    }
  }
`;
