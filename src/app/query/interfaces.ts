export interface IParticipant {
  id: string;
}

export interface CreatRoomQuery {
  createRoom: {
    id: string;
    shareId: string;
    participants: IParticipant[];
    maxParticipants: string;
  };
}

export interface GetRangeParticipantsQuery {
  getRangeParticipants: {
    min: number;
    max: number;
    defaultValue: number;
  };
}
