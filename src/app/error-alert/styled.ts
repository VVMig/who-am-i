import styled from 'styled-components';

import { fade } from '../../packages';
import { zIndex } from '../../packages/zIndex';

const ErrorAlertContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  max-width: 800px;
  width: 100%;
  padding: 0 3px;
  z-index: ${zIndex.alert};
`;

const ErrorAlert = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  overflow: hidden;

  &.entering {
    animation: ${fade} 200ms ease-out both;
  }

  &.exiting {
    animation: ${fade} 200ms ease-out both reverse;
  }
`;

const SideContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  height: inherit;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const CloseContainer = styled(SideContainer)`
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.black};
`;

const ErrorText = styled.span`
  padding-top: 2px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Styled = {
  ErrorAlert,
  SideContainer,
  TextContainer,
  CloseContainer,
  ErrorAlertContainer,
  Title,
  ErrorText,
};
