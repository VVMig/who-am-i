import React, { useState } from 'react';

import { ModalProps } from '../../../packages';
import { useCustomTranslation } from '../../hooks';
import { Styled } from './styled';

export const NameModal: React.FC<ModalProps> = ({ handleModalClose }) => {
  const [selectName, setSelectName] = useState('');

  const { t } = useCustomTranslation();

  const onChangeName: React.FormEventHandler<HTMLInputElement> = (e) => {
    setSelectName(e.currentTarget.value);
  };

  return (
    <Styled.NameModal handleModalClose={handleModalClose}>
      <Styled.ModalTitle>{t('game.guessingName')}</Styled.ModalTitle>
      <Styled.GuessNameInput onChange={onChangeName} value={selectName} />
      {selectName.trim() && (
        <Styled.SelectButton>{t('game.selectName')}</Styled.SelectButton>
      )}
    </Styled.NameModal>
  );
};
