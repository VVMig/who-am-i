import React from 'react';

import { PersonFill, XCircle } from 'react-bootstrap-icons';

enum IconType {
  User = 'User',
  Cross = 'Cross',
}

export const icons: Record<IconType, JSX.Element> = {
  [IconType.User]: <PersonFill />,
  [IconType.Cross]: <XCircle />,
};
