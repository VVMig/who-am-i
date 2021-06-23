import styled, { css } from 'styled-components';

import { ActiveStyledProps } from './interfaces';

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.black};
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

const User = styled.div<ActiveStyledProps>`
  display: flex;
  cursor: pointer;
  padding: 5px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 34px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  transition: 0.2s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0 0 6px ${({ theme }) => theme.colors.lightBlue};
      border: 1px solid ${({ theme }) => theme.colors.lightBlue};
      color: ${({ theme }) => theme.colors.lightBlue};
    `}
`;

const SwitchLang = styled.div<ActiveStyledProps>`
  text-align: center;
  text-transform: capitalize;
  border: 1px solid ${({ theme }) => theme.colors.black};
  width: 40px;
  font-size: 20px;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0 0 6px ${({ theme }) => theme.colors.lightBlue};
      border: 1px solid ${({ theme }) => theme.colors.lightBlue};
      color: ${({ theme }) => theme.colors.lightBlue};
    `}
`;

export const Styled = {
  Container,
  Header,
  User,
  SwitchLang,
};
