import React from 'react';

import { useCustomTranslation } from '../hooks';
import { SelectMenu } from './SelectMenu';
import { Styled } from './styled';

export const Menu = () => {
  const { t } = useCustomTranslation();

  return (
    <Styled.Menu>
      <Styled.TitleWrapper>
        <Styled.Title>{t('menu.title')}</Styled.Title>
      </Styled.TitleWrapper>
      <SelectMenu />
    </Styled.Menu>
  );
};
