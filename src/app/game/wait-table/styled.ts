import styled, { css } from 'styled-components';

import { Button } from '../../../packages';
import { PlayerFields } from './interfaces';

const opacity = 0.5;

const WaitTableContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 0 5px;
  overflow: hidden;
`;

const WaitTable = styled.div`
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  * + * {
    margin-top: 2px;
  }
`;

const PlayerCell = styled.div<PlayerFields>`
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

  ${({ isAdmin }) =>
    isAdmin &&
    css`
      background-color: ${({ theme }) => theme.colors.orange};
    `}
`;

const PlayerName = styled.h3`
  font-weight: lighter;
  font-size: 18px;
`;

const WaitText = styled.div`
  font-size: 18px;
  font-weight: lighter;
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

const KickPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  padding: 5px;
  user-select: none;
  cursor: pointer;

  &:active {
    transition: 0.2s linear;
    transform: scale(0.95);
  }
`;

const AdminText = styled.div`
  font-size: 18px;
  font-weight: lighter;
`;

export const Styled = {
  WaitTableContainer,
  WaitTable,
  Title,
  Header,
  PlayerCell,
  Body,
  PlayerName,
  WaitText,
  StartButton,
  Footer,
  KickPlayer,
  AdminText,
};
