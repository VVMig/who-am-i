import { types } from 'mobx-state-tree';

import { GameStage } from '../GameStage';
import { GameUser } from './GameUser';

const defaultMaxParticipants = 0;
const initStep = 0;

const Question = types.model('Question', {
  from: types.maybeNull(types.string),
  value: types.maybeNull(types.string),
});

export const Room = types
  .model('Room', {
    maxParticipants: types.optional(types.number, defaultMaxParticipants),
    shareId: types.optional(types.string, ''),
    participants: types.optional(types.array(GameUser), []),
    gameStage: types.optional(
      types.enumeration('GameStage', [
        GameStage.NAME_STAGE,
        GameStage.PLAY_STAGE,
        GameStage.WAIT_STAGE,
      ]),
      GameStage.WAIT_STAGE
    ),
    question: types.maybeNull(Question),
    step: types.optional(types.number, initStep),
  })
  .views((self) => ({
    get isAllHaveGuessName() {
      return self.participants.reduce(
        (result, participant) => result && !!participant.guessName,
        true
      );
    },
    get questionText() {
      return self.question?.value;
    },
    get currentPlayerIndex() {
      return self.step % self.participants.length;
    },
  }))
  .actions((self) => ({
    isUserHaveGuessName(id?: string) {
      const user = self.participants.find(
        (participant) => participant.id === id
      );

      return !user || !!user.guessName;
    },
    incrementStep() {
      self.step += 1;
    },
  }));
