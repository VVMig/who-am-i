import React, { useRef } from 'react';

import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { Dropdown } from '../../../packages';
import { useCustomTranslation, useOutsideClick } from '../../hooks';
import { icons } from '../../icons';
import { LEAVE_ROOM } from '../../query';
import { RoutesEnum } from '../../RoutesEnum';
import { store } from '../../store';
import { Styled } from './styled';

interface Props {
  isUserActive: boolean;
  onToggleUser: () => void;
}

export const User: React.FC<Props> = ({ isUserActive, onToggleUser }) => {
  const history = useHistory();

  const [leaveRoom] = useMutation(LEAVE_ROOM);

  const userRef = useRef<HTMLDivElement | null>(null);
  const { t } = useCustomTranslation();

  useOutsideClick(userRef, () => {
    if (isUserActive) {
      onToggleUser();
    }
  });

  const leave = async () => {
    try {
      await leaveRoom();

      history.push(RoutesEnum.Home);
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  return (
    <Styled.UserWrapper ref={userRef}>
      <Styled.User isActive={isUserActive} onClick={onToggleUser}>
        {icons.User}
      </Styled.User>
      <Dropdown
        isShow={isUserActive}
        onCloseDropdown={onToggleUser}
        dropdownItems={
          history.location.pathname === RoutesEnum.Game
            ? [
                {
                  text: t('game.leaveRoom'),
                  onClickHandler: leave,
                },
              ]
            : [
                {
                  text: t('user.signIn'),
                },
                {
                  text: t('user.signUp'),
                },
              ]
        }
      />
    </Styled.UserWrapper>
  );
};
