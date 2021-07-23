import { GameStage } from '../GameStage';

export interface IParticipant {
  id: string;
  displayName: string;
  guessName: string;
  isAdmin: boolean;
  isFinish: boolean;
  color: string;
  namingUser: IParticipant;
  seterUser: IParticipant;
  correctAnswers: number;
}

export interface AuthorizationQuery {
  authorize: IParticipant;
}

export interface IRoom {
  maxParticipants: number;
  participants: IParticipant[];
  shareId: string;
  gameStage: GameStage;
  question: {
    from: string;
    value: string;
  };
  step: number;
}

export interface CreatRoomQuery {
  createRoom: {
    shareId: string;
  };
}

export interface JoinRoomQuery {
  joinRoom: {
    shareId: string;
  };
}

export interface GameUserUpdateSubscription {
  gameUserUpdate: IRoom;
}

export interface GetRoomQuery {
  getRoom: IRoom;
}

export interface ReconnectRoomQuery {
  reconnectRoom: {
    shareId: string;
  };
}

export interface GetRangeParticipantsQuery {
  getRangeParticipants: {
    min: number;
    max: number;
    defaultValue: number;
  };
}

export interface IsRoomExistQuery {
  isRoomExist: boolean;
}

export interface IKickedGameUser {
  kickedGameUser: string;
}

export interface IWaitStageNextQuery {
  waitStageNext: {
    shareId: string;
  };
}

export interface QuestionUpdateSubscription {
  questionUpdate: IRoom;
}

export interface RoomStageSubscription {
  roomStage: IRoom;
}
