import React from 'react';

import { ModalProps } from '../..';
import { Styled } from './styled';

interface Props extends ModalProps {
  onClickConfirm: () => void;
  onClickDenied: () => void;
  text?: string | null;
}

export const ConfirmModal: React.FC<Props> = ({
  handleModalClose,
  onClickDenied,
  onClickConfirm,
  text,
}) => {
  return (
    <Styled.ConfirmModal handleModalClose={handleModalClose}>
      <Styled.Title>{text}</Styled.Title>
      <Styled.ChoiceContainer>
        <Styled.ConfirmButton onClick={onClickConfirm}>
          Yes
        </Styled.ConfirmButton>
        <Styled.DeniedButton onClick={onClickDenied}>No</Styled.DeniedButton>
      </Styled.ChoiceContainer>
    </Styled.ConfirmModal>
  );
};
