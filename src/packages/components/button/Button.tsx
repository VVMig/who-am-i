import React from 'react';

import { Styled } from './styled';

export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <Styled.Button {...props}>
      <Styled.ButtonText>{children}</Styled.ButtonText>
    </Styled.Button>
  );
};
