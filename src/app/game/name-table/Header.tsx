import React from 'react';

import { useCustomTranslation } from '../../hooks';
import { Translation } from '../../Translation';
import { Styled } from './styled';

export const Header = () => {
  const { t } = useCustomTranslation();

  return (
    <Styled.Header>
      <Styled.Title>{t(Translation.game.namingStage)}</Styled.Title>
    </Styled.Header>
  );
};
