import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';

import { useCustomTranslation } from '../../hooks';
import { GUESS_NAME } from '../../query';
import { IGameUser, store } from '../../store';
import { Translation } from '../../Translation';
import { Styled } from './styled';

interface Props {
  player: IGameUser;
}

export const NameModal: React.FC<Props> = observer(({ player }) => {
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
          id: player.namingUser?.id,
        },
      });
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  return (
    <Styled.NameModal>
      <Styled.ModalTitle>
        {t(Translation.game.guessingName)} {player.namingUser?.displayName}
      </Styled.ModalTitle>
      <Styled.GuessNameInput onChange={onChangeName} value={selectName} />
      {selectName.trim() && (
        <Styled.SelectButton onClick={onSubmitName}>
          {t(Translation.game.selectName)}
        </Styled.SelectButton>
      )}
    </Styled.NameModal>
  );
});
