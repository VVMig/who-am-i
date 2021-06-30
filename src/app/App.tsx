import React from 'react';

import { ErrorAlert } from './error-alert';
import { Header } from './layout';
import { RoutesSwitch } from './RoutesSwitch';

export const App = () => {
  return (
    <>
      <ErrorAlert />
      <Header />
      <RoutesSwitch />
    </>
  );
};
