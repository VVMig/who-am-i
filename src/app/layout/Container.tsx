import React from 'react';

import { useHistory } from 'react-router-dom';

import { Styled } from './styled';

export const Container: React.FC = ({ children }) => {
  const history = useHistory();

  return (
    <Styled.Container isPush={history.action === 'PUSH'}>
      {children}
    </Styled.Container>
  );
};
