import { types } from 'mobx-state-tree';

export const GameUser = types.model('GameUser', {
  id: types.string,
  guessName: types.maybeNull(types.string),
  displayName: types.string,
  isAdmin: types.boolean,
  isFinish: types.boolean,
});
