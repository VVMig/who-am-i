import styled from 'styled-components';

import { rotate, storm } from '../../configs';

const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.7px;
`;

const Button = styled.button`
  position: relative;
  margin: 0;
  padding: 12px 12px;
  width: 180px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:before,
  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.lightBlue};
    content: '';
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }
  &:hover {
    &:before,
    &:after {
      opacity: 0.15;
      transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
        opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }
    &:before {
      transform: translate3d(50%, 0, 0) scale(0.9);
    }
    &:after {
      transform: translate(50%, 0) scale(1.1);
    }
  }
  &:hover {
    animation: ${rotate} 0.7s ease-in-out both;
    ${ButtonText} {
      animation: ${storm} 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
`;

export const Styled = {
  ButtonText,
  Button,
};
