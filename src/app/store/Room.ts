import { types } from 'mobx-state-tree';

export const Participant = types.model('Participant', {
  id: types.string,
  guessName: types.maybeNull(types.string),
  displayName: types.string,
  isAdmin: types.boolean,
});

export const Room = types.model('Room', {
  maxParticipants: types.maybe(types.number),
  shareId: types.optional(types.string, ''),
  participants: types.optional(types.array(Participant), []),
});
