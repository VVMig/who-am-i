import { types } from 'mobx-state-tree';

export const Error = types
  .model('Error', {
    message: types.maybeNull(types.string),
  })
  .actions((self) => ({
    setError(message: string) {
      self.message = message;
    },
    restoreError() {
      self.message = null;
    },
  }));
