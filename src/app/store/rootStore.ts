import { cast, types } from 'mobx-state-tree';

import { Error } from './error';
import { IRoomTypes } from './interfaces';
import { Room } from './Room';

export const RootStore = types
  .model({
    error: Error,
    room: types.optional(Room, {}),
  })
  .actions((self) => ({
    setRoom(room: IRoomTypes) {
      self.room = cast(room);
    },
  }))
  .views((self) => ({
    get errorMessage() {
      return self.error.message;
    },
  }));
