import { GameStage } from '../GameStage';

export interface IParticipant {
  id: string;
  displayName: string;
  guessName: string;
  isAdmin: boolean;
  isFinish: boolean;
}

export interface IRoom {
  maxParticipants: number;
  participants: IParticipant[];
  shareId: string;
  gameStage: GameStage;
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

export interface RoomStageSubscription {
  roomStage: IRoom;
}
