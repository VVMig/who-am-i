import styled, { css } from 'styled-components';

import { clickAnimation } from '../../../packages';
import { ActiveStyledProps, ClipboardStyledProps } from './interfaces';

const activeStateStyles = css`
  transition: 100ms ease-out;
  transition-delay: 200ms;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.lightBlue};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.lightBlue};
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 5px 5px 10px;
`;

const UserWrapper = styled.div`
  position: relative;
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

  ${({ isActive }) => isActive && activeStateStyles}
`;

const SwitchLangWrapper = styled.div`
  position: relative;
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
  padding: 5px;

  ${({ isActive }) => isActive && activeStateStyles}
`;

const RoomShareId = styled.div`
  padding: 5px;
`;

const RoomShareIdWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 5px;
`;

const Clipboard = styled.span<ClipboardStyledProps>`
  font-size: 18px;
  cursor: pointer;
  margin-left: 8px;

  ${({ isCopied }) =>
    isCopied &&
    css`
      animation: ${clickAnimation} 0.2s linear both;
    `}
`;

export const Styled = {
  Header,
  User,
  SwitchLang,
  UserWrapper,
  SwitchLangWrapper,
  RoomShareId,
  RoomShareIdWrapper,
  Clipboard,
};
