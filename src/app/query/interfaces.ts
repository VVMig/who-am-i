export interface IParticipant {
  id: string;
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

export interface GetRangeParticipantsQuery {
  getRangeParticipants: {
    min: number;
    max: number;
    defaultValue: number;
  };
}
