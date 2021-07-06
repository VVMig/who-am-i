import React from 'react';

import { useCustomTranslation } from '../../hooks';
import { Styled } from './styled';

export const Header = () => {
  const { t } = useCustomTranslation();

  return (
    <Styled.Header>
      <Styled.Title>{t('game.waitOtherPlayers')}</Styled.Title>
    </Styled.Header>
  );
};
