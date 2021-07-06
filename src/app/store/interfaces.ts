import { SnapshotIn } from 'mobx-state-tree';

import { Room } from './Room';

export type IRoomTypes = SnapshotIn<typeof Room>;
