import { cast, types } from 'mobx-state-tree';

import { Error } from './error';
import { GameUser } from './GameUser';
import { IGameUser, IRoomTypes } from './interfaces';
import { Room } from './Room';

export const RootStore = types
  .model({
    error: Error,
    room: types.optional(Room, {}),
    gameUser: types.maybe(GameUser),
  })
  .actions((self) => ({
    setRoom(room: IRoomTypes) {
      self.room = cast(room);
    },
    setGameUser(gameUser: IGameUser) {
      self.gameUser = cast(gameUser);
    },
  }))
  .views((self) => ({
    get errorMessage() {
      return self.error.message;
    },
  }));
