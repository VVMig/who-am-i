import React, { useRef, useState } from 'react';

import { Dropdown, DropdownItem } from '../../../packages';
import { useCustomTranslation, useOutsideClick } from '../../hooks';
import { languages } from '../../languages';
import { Styled } from './styled';

interface Props {
  isLanguageActive: boolean;
  onToggleLanguage: () => void;
}

export const SwitchLanguage: React.FC<Props> = ({
  isLanguageActive,
  onToggleLanguage,
}) => {
  const switchLanguageRef = useRef<HTMLDivElement | null>(null);
  const { changeLanguage, i18n } = useCustomTranslation();

  const [translations] = useState<DropdownItem[]>(
    languages.map((language) => ({
      text: language,
      onClickHandler: () => changeLanguage(language),
    }))
  );

  useOutsideClick(switchLanguageRef, () => {
    if (isLanguageActive) {
      onToggleLanguage();
    }
  });

  return (
    <Styled.SwitchLangWrapper ref={switchLanguageRef}>
      <Styled.SwitchLang isActive={isLanguageActive} onClick={onToggleLanguage}>
        {i18n.language}
      </Styled.SwitchLang>
      <Dropdown
        isShow={isLanguageActive}
        dropdownItems={translations}
        onCloseDropdown={onToggleLanguage}
      />
    </Styled.SwitchLangWrapper>
  );
};
