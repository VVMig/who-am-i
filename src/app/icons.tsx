import React from 'react';

import { PersonFill } from 'react-bootstrap-icons';

enum IconType {
  User = 'User',
}

export const icons: Record<IconType, JSX.Element> = {
  [IconType.User]: <PersonFill />,
};
