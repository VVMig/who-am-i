import React from 'react';

import {
  PersonFill,
  XCircle,
  Clipboard,
  PersonCircle,
} from 'react-bootstrap-icons';

enum IconType {
  User = 'User',
  UserCircle = 'UserCircle',
  Cross = 'Cross',
  Clipboard = 'Clipboard',
}

export const icons: Record<IconType, JSX.Element> = {
  [IconType.User]: <PersonFill />,
  [IconType.Cross]: <XCircle />,
  [IconType.Clipboard]: <Clipboard />,
  [IconType.UserCircle]: <PersonCircle />,
};
