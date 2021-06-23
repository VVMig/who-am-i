import React from 'react';

import { Button } from '../../packages';
import { Styled } from './styled';

export const SelectMenu = () => {
  return (
    <Styled.SelectMenu>
      <Button>Join room</Button>
      <Button>Create room</Button>
    </Styled.SelectMenu>
  );
};
