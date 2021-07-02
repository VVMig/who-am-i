import styled from 'styled-components';

import { Button } from '../button';
import { Modal } from '../modal';

const ConfirmModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
  width: 100%;
  padding: 10px 5px;
  background-color: ${({ theme }) => theme.colors.white};
  height: min-content;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const ChoiceContainer = styled.div`
  display: flex;
  padding-top: 10px;

  & * + * {
    margin-left: 5px;
  }
`;

const ConfirmButton = styled(Button)`
  max-width: 100px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.success};

    &::after,
    &::before {
      display: none;
    }
  }
`;

const DeniedButton = styled(ConfirmButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

export const Styled = {
  ConfirmModal,
  Title,
  ConfirmButton,
  ChoiceContainer,
  DeniedButton,
};
