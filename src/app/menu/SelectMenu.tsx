import React from 'react';

import { useHistory } from 'react-router-dom';

import { Button } from '../../packages';
import { useCustomTranlation } from '../hooks';
import { RoutesEnum } from '../RoutesEnum';
import { Styled } from './styled';

export const SelectMenu = () => {
  const { t } = useCustomTranlation();

  const history = useHistory();

  return (
    <Styled.SelectMenu>
      <Button onClick={() => history.push(RoutesEnum.JoinRoom)}>
        {t('menu.joinRoom')}
      </Button>
      <Button onClick={() => history.push(RoutesEnum.CreateRoom)}>
        {t('menu.createRoom')}
      </Button>
    </Styled.SelectMenu>
  );
};
