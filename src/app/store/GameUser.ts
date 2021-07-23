import { types } from 'mobx-state-tree';

const defaultCorrectAnswers = 0;

const QueueUser = types.model('QueueUser', {
  id: types.string,
  displayName: types.string,
});

export const GameUser = types.model('GameUser', {
  id: types.string,
  guessName: types.maybeNull(types.string),
  displayName: types.string,
  isAdmin: types.boolean,
  isFinish: types.boolean,
  color: types.string,
  namingUser: types.maybeNull(QueueUser),
  seterUser: types.maybeNull(QueueUser),
  correctAnswers: types.optional(types.number, defaultCorrectAnswers),
});
