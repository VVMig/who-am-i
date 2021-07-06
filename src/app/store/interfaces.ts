import { SnapshotIn } from 'mobx-state-tree';

import { GameUser } from './GameUser';
import { Room } from './Room';

export type IRoomTypes = SnapshotIn<typeof Room>;
export type IGameUser = SnapshotIn<typeof GameUser>;
