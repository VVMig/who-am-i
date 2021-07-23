import React from 'react';

import {
  PersonFill,
  XCircle,
  Clipboard,
  PersonCircle,
  CheckCircle,
} from 'react-bootstrap-icons';

enum IconType {
  User = 'User',
  UserCircle = 'UserCircle',
  Cross = 'Cross',
  Clipboard = 'Clipboard',
  Correct = 'Correct',
}

export const icons: Record<IconType, JSX.Element> = {
  [IconType.User]: <PersonFill />,
  [IconType.Cross]: <XCircle />,
  [IconType.Clipboard]: <Clipboard />,
  [IconType.UserCircle]: <PersonCircle />,
  [IconType.Correct]: <CheckCircle />,
};
