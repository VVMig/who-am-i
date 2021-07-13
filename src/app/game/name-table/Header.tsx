import React from 'react';

import { useCustomTranslation } from '../../hooks';
import { Styled } from './styled';

export const Header = () => {
  const { t } = useCustomTranslation();

  return (
    <Styled.Header>
      <Styled.Title>{t('game.namingStage')}</Styled.Title>
    </Styled.Header>
  );
};
