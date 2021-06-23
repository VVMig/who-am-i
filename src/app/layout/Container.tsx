import React from 'react';

import { Styled } from './styled';

export const Container: React.FC = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};
