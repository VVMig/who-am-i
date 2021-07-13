import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';

import { useCustomTranslation } from '../../hooks';
import { GUESS_NAME } from '../../query';
import { store } from '../../store';
import { Styled } from './styled';

export const NameModal = observer(() => {
  const [guessName] = useMutation(GUESS_NAME);
  const [selectName, setSelectName] = useState('');

  const { t } = useCustomTranslation();

  const onChangeName: React.FormEventHandler<HTMLInputElement> = (e) => {
    setSelectName(e.currentTarget.value);
  };

  const onSubmitName = async () => {
    try {
      await guessName({
        variables: {
          name: selectName,
          id: store.room.nowNaming?.id,
        },
      });
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  return (
    <Styled.NameModal>
      <Styled.ModalTitle>
        {t('game.guessingName')} {store.room.nowNaming?.displayName}
      </Styled.ModalTitle>
      <Styled.GuessNameInput onChange={onChangeName} value={selectName} />
      {selectName.trim() && (
        <Styled.SelectButton onClick={onSubmitName}>
          {t('game.selectName')}
        </Styled.SelectButton>
      )}
    </Styled.NameModal>
  );
});
