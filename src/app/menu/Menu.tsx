import React from 'react';

import { SelectMenu } from './SelectMenu';
import { Styled } from './styled';

export const Menu = () => {
  return (
    <Styled.Menu>
      <Styled.TitleWrapper>
        <Styled.Title>Who am I</Styled.Title>
      </Styled.TitleWrapper>
      <SelectMenu />
    </Styled.Menu>
  );
};
