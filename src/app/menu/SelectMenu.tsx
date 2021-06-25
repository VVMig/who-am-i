import React from 'react';

import { useHistory } from 'react-router-dom';

import { Button } from '../../packages';
import { RoutesEnum } from '../RoutesEnum';
import { Styled } from './styled';

export const SelectMenu = () => {
  const history = useHistory();

  return (
    <Styled.SelectMenu>
      <Button>Join room</Button>
      <Button onClick={() => history.push(RoutesEnum.CreateRoom)}>
        Create room
      </Button>
    </Styled.SelectMenu>
  );
};
