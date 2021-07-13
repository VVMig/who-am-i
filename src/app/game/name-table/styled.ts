import styled, { css } from 'styled-components';

import { Button, Modal } from '../../../packages';
import { IPlayerCell } from './interfaces';

const opacity = 0.5;

const NameTableContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 0 5px;
  overflow: hidden;
`;

const NameTable = styled.div`
  background-color: ${({ theme }) => theme.colors.opacityGray(opacity)};
  width: 100%;
  padding-bottom: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Header = styled.div`
  display: flex;
  padding-top: 10px;
  width: 100%;
  justify-content: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
`;

const PlayerCell = styled.div<IPlayerCell>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.opacityGray()};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 5px;
  height: 50px;
  overflow: hidden;
  justify-content: space-between;

  ${({ isCurrentPlayer }) =>
    isCurrentPlayer &&
    css`
      background-color: ${({ theme }) => theme.colors.lightBlue};
    `}

  ${({ isNaming }) =>
    isNaming &&
    css`
      background-color: ${({ theme }) => theme.colors.orange};
    `}

  ${({ isNameSelect }) =>
    isNameSelect &&
    css`
      background-color: ${({ theme }) => theme.colors.darkGreen};
    `}
`;

const PlayerName = styled.h3`
  font-weight: lighter;
  font-size: 18px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  * + * {
    margin-top: 2px;
  }
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 10px;
`;

const StartButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
`;

const SelectButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.orange};
  border: 0;

  & span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const NameModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
  width: 100%;
  padding: 10px 5px;
  background-color: ${({ theme }) => theme.colors.white};
  height: min-content;

  * + * {
    margin-top: 5px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: lighter;
`;

const GuessNameInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 5px;
  margin: 10px 0;
  transition: 0.2s linear;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
    outline: 0;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.lightBlue};
  }
`;

const StatusText = styled.div`
  font-weight: lighter;
`;

export const Styled = {
  NameTable,
  NameTableContainer,
  PlayerCell,
  PlayerName,
  Body,
  Header,
  Title,
  Footer,
  StartButton,
  NameModal,
  ModalTitle,
  GuessNameInput,
  SelectButton,
  StatusText,
};
