import React from 'react';

import { useCustomTranslation } from '../../../hooks';
import { Translation } from '../../../Translation';
import { Styled } from './styled';

export const WaitModal = () => {
  const { t } = useCustomTranslation();

  return (
    <Styled.WaitModal>
      <Styled.Title>{t(Translation.game.waitAnswer)}.</Styled.Title>
    </Styled.WaitModal>
  );
};
