import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { RoutesEnum } from '../../RoutesEnum';
import { ShareId } from './ShareId';
import { Styled } from './styled';
import { SwitchLanguage } from './SwitchLanguage';
import { User } from './User';

export const Header = () => {
  const history = useHistory();
  const [isUserActive, setIsUserActive] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);
  const [isShowShareId, setIsShowShareId] = useState(false);

  const onToggleLanguage = () => {
    setIsUserActive(false);
    setIsLangActive(!isLangActive);
  };

  const onToggleUser = () => {
    setIsLangActive(false);
    setIsUserActive(!isUserActive);
  };

  useEffect(() => {
    setIsShowShareId(location.pathname === RoutesEnum.Game);

    return history.listen((location) => {
      setIsShowShareId(location.pathname === RoutesEnum.Game);
    });
  }, [history]);

  return (
    <Styled.Header>
      {isShowShareId && <ShareId />}
      <SwitchLanguage
        isLanguageActive={isLangActive}
        onToggleLanguage={onToggleLanguage}
      />

      <User isUserActive={isUserActive} onToggleUser={onToggleUser} />
    </Styled.Header>
  );
};
