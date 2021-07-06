import { types } from 'mobx-state-tree';

import { GameUser } from './GameUser';

const defaultMaxParticipants = 0;

export const Room = types.model('Room', {
  maxParticipants: types.optional(types.number, defaultMaxParticipants),
  shareId: types.optional(types.string, ''),
  participants: types.optional(types.array(GameUser), []),
});
