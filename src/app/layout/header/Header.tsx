import React, { useState } from 'react';

import { Styled } from './styled';
import { SwitchLanguage } from './SwitchLanguage';
import { User } from './User';

export const Header = () => {
  const [isUserActive, setIsUserActive] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);

  const onToggleLanguage = () => {
    setIsUserActive(false);
    setIsLangActive(!isLangActive);
  };

  const onToggleUser = () => {
    setIsLangActive(false);
    setIsUserActive(!isUserActive);
  };

  return (
    <Styled.Header>
      <SwitchLanguage
        isLanguageActive={isLangActive}
        onToggleLanguage={onToggleLanguage}
      />

      <User isUserActive={isUserActive} onToggleUser={onToggleUser} />
    </Styled.Header>
  );
};
