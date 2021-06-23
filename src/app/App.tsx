import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Container, Header } from './layout';
import { RoutesEnum } from './RoutesEnum';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path={RoutesEnum.Home} exact>
            Hello World
          </Route>
        </Switch>
      </Container>
    </>
  );
};
