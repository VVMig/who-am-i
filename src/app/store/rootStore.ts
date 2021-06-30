import { types } from 'mobx-state-tree';

import { Error } from './error';

export const RootStore = types
  .model({
    error: Error,
  })
  .views((self) => ({
    get errorMessage() {
      return self.error.message;
    },
  }));
