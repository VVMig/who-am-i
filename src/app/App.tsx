import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { RoutesEnum } from './RoutesEnum';

export const App = () => {
  return (
    <Switch>
      <Route path={RoutesEnum.Home} exact>
        Hello World
      </Route>
    </Switch>
  );
};
