import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { Transition } from 'react-transition-group';

import { icons } from '../icons';
import { store } from '../store';
import { Styled } from './styled';

export const ErrorAlert = observer(() => {
  const [isAlertShow, setIsAlertShow] = useState(!!store.errorMessage);

  const onClickClose = () => {
    setIsAlertShow(false);
  };

  useEffect(() => {
    setIsAlertShow(!!store.errorMessage);
  }, [store.errorMessage]);

  return (
    <Transition
      in={isAlertShow}
      timeout={200}
      unmountOnExit
      onExited={store.error.restoreError}
    >
      {(state) => (
        <Styled.ErrorAlertContainer>
          <Styled.ErrorAlert className={state}>
            <Styled.SideContainer>{icons.Cross}</Styled.SideContainer>
            <Styled.TextContainer>
              <Styled.Title>Error</Styled.Title>
              <Styled.ErrorText>{store.errorMessage}</Styled.ErrorText>
            </Styled.TextContainer>
            <Styled.CloseContainer onClick={onClickClose}>
              Close
            </Styled.CloseContainer>
          </Styled.ErrorAlert>
        </Styled.ErrorAlertContainer>
      )}
    </Transition>
  );
});
