import React from 'react';

import { useHistory } from 'react-router-dom';

import { Button } from '../../packages';
import { useCustomTranslation } from '../hooks';
import { RoutesEnum } from '../RoutesEnum';
import { Translation } from '../Translation';
import { Styled } from './styled';

export const SelectMenu = () => {
  const { t } = useCustomTranslation();

  const history = useHistory();

  return (
    <Styled.SelectMenu>
      <Button onClick={() => history.push(RoutesEnum.JoinRoom)}>
        {t(Translation.menu.joinRoom)}
      </Button>
      <Button onClick={() => history.push(RoutesEnum.CreateRoom)}>
        {t(Translation.menu.createRoom)}
      </Button>
    </Styled.SelectMenu>
  );
};
