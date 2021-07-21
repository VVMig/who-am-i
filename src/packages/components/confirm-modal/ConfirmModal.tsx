import React from 'react';

import { ModalProps } from '../..';
import { Styled } from './styled';

interface Props extends ModalProps {
  onClickConfirm: () => void;
  onClickDenied: () => void;
  onClickGuessed?: () => void;
  text?: string | null;
}

export const ConfirmModal: React.FC<Props> = ({
  handleModalClose,
  onClickDenied,
  onClickConfirm,
  onClickGuessed,
  text,
}) => {
  return (
    <Styled.ConfirmModal handleModalClose={handleModalClose}>
      <Styled.Title>{text}</Styled.Title>
      <Styled.ChoiceContainer>
        <Styled.ConfirmButton onClick={onClickConfirm}>
          Yes
        </Styled.ConfirmButton>
        {onClickGuessed && (
          <Styled.GuessButton onClick={onClickGuessed}>
            Guessed
          </Styled.GuessButton>
        )}
        <Styled.DeniedButton onClick={onClickDenied}>No</Styled.DeniedButton>
      </Styled.ChoiceContainer>
    </Styled.ConfirmModal>
  );
};
