import React, { useRef } from 'react';

import { Dropdown } from '../../../packages';
import { useCustomTranslation, useOutsideClick } from '../../hooks';
import { icons } from '../../icons';
import { Styled } from './styled';

interface Props {
  isUserActive: boolean;
  onToggleUser: () => void;
}

export const User: React.FC<Props> = ({ isUserActive, onToggleUser }) => {
  const userRef = useRef<HTMLDivElement | null>(null);
  const { t } = useCustomTranslation();

  useOutsideClick(userRef, () => {
    if (isUserActive) {
      onToggleUser();
    }
  });

  return (
    <Styled.UserWrapper ref={userRef}>
      <Styled.User isActive={isUserActive} onClick={onToggleUser}>
        {icons.User}
      </Styled.User>
      <Dropdown
        isShow={isUserActive}
        dropdownItems={[
          {
            text: t('user.signIn'),
          },
          {
            text: t('user.signUp'),
          },
        ]}
      />
    </Styled.UserWrapper>
  );
};
