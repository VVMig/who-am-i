export interface IParticipant {
  id: string;
  displayName: string;
  guessName: string;
  isAdmin: boolean;
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

export interface GetRoomQuery {
  getRoom: {
    shareId: string;
    maxParticipants: number;
    participants: IParticipant[];
  };
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
