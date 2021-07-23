import React from 'react';

import { Styled } from './styled';

interface Props {
  className?: string;
}

export const Spinner: React.FC<Props> = ({ className }) => {
  return (
    <Styled.Spinner className={className}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Styled.Spinner>
  );
};
