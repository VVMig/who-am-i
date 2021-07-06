import React from 'react';

import { PersonFill, XCircle, Clipboard } from 'react-bootstrap-icons';

enum IconType {
  User = 'User',
  Cross = 'Cross',
  Clipboard = 'Clipboard',
}

export const icons: Record<IconType, JSX.Element> = {
  [IconType.User]: <PersonFill />,
  [IconType.Cross]: <XCircle />,
  [IconType.Clipboard]: <Clipboard />,
};
