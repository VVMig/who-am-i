import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Container, Header } from './layout';
import { Menu } from './menu';
import { RoutesEnum } from './RoutesEnum';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path={RoutesEnum.Home} component={Menu} exact />
        </Switch>
      </Container>
    </>
  );
};
