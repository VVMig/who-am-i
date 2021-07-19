import { types } from 'mobx-state-tree';

import { GameStage } from '../GameStage';
import { GameUser } from './GameUser';

const defaultMaxParticipants = 0;

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
    question: types.maybeNull(types.string),
  })
  .views((self) => ({
    get isAllHaveGuessName() {
      return self.participants.reduce(
        (result, participant) => result && !!participant.guessName,
        true
      );
    },
  }))
  .actions((self) => ({
    isUserHaveGuessName(id?: string) {
      const user = self.participants.find(
        (participant) => participant.id === id
      );

      return !user || !!user.guessName;
    },
  }));
