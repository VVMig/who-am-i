import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Container, pageAnimationDuration } from './layout';
import { routes } from './Routes';

export const RoutesSwitch = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={pageAnimationDuration}
        classNames="page"
      >
        <Switch location={location}>
          {routes.map((route) => (
            <Route path={route.path} exact={route.exact} key={route.path}>
              <Container key={`${route.path}`}>{route.component}</Container>
            </Route>
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
