import React, { useRef } from 'react';

import { Dropdown } from '../../../packages';
import { useOutsideClick } from '../../hooks';
import { Styled } from './styled';

interface Props {
  isLangActive: boolean;
  onToggleLang: () => void;
}

export const SwitchLang: React.FC<Props> = ({ isLangActive, onToggleLang }) => {
  const switchLangRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(switchLangRef, () => {
    if (isLangActive) {
      onToggleLang();
    }
  });

  return (
    <Styled.SwitchLangWrapper ref={switchLangRef}>
      <Styled.SwitchLang isActive={isLangActive} onClick={onToggleLang}>
        En
      </Styled.SwitchLang>
      <Dropdown isShow={isLangActive} dropdownItems={[]} />
    </Styled.SwitchLangWrapper>
  );
};
