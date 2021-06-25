import { CreateRoom } from './create-room/CreateRoom';
import { Menu } from './menu';
import { RoutesEnum } from './RoutesEnum';

interface IRoute {
  path: RoutesEnum;
  component: JSX.Element;
  exact?: boolean;
}

export const routes: IRoute[] = [
  {
    path: RoutesEnum.Home,
    component: <Menu />,
    exact: true,
  },
  {
    path: RoutesEnum.CreateRoom,
    component: <CreateRoom />,
  },
];
