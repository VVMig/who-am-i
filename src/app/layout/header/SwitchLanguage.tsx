import React, { useRef } from 'react';

import { Dropdown } from '../../../packages';
import { useOutsideClick } from '../../hooks';
import { Styled } from './styled';

interface Props {
  isLanguageActive: boolean;
  onToggleLang: () => void;
}

export const SwitchLanguage: React.FC<Props> = ({
  isLanguageActive,
  onToggleLang,
}) => {
  const switchLanguageRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(switchLanguageRef, () => {
    if (isLanguageActive) {
      onToggleLang();
    }
  });

  return (
    <Styled.SwitchLangWrapper ref={switchLanguageRef}>
      <Styled.SwitchLang isActive={isLanguageActive} onClick={onToggleLang}>
        En
      </Styled.SwitchLang>
      <Dropdown isShow={isLanguageActive} dropdownItems={[]} />
    </Styled.SwitchLangWrapper>
  );
};
