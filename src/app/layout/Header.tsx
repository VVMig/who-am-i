import React, { useRef, useState } from 'react';

import { useOutsideClick } from '../hooks';
import { icons } from '../icons';
import { Styled } from './styled';

export const Header = () => {
  const [isUserActive, setIsUserActive] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(headerRef, () => {
    setIsUserActive(false);
    setIsLangActive(false);
  });

  const onToggleLang = () => {
    setIsUserActive(false);
    setIsLangActive(!isLangActive);
  };

  const onToggleUser = () => {
    setIsLangActive(false);
    setIsUserActive(!isUserActive);
  };

  return (
    <Styled.Header ref={headerRef}>
      <Styled.SwitchLang isActive={isLangActive} onClick={onToggleLang}>
        En
      </Styled.SwitchLang>

      <Styled.User isActive={isUserActive} onClick={onToggleUser}>
        {icons.User}
      </Styled.User>
    </Styled.Header>
  );
};
