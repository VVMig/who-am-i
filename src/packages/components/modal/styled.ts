import styled, { css } from 'styled-components';

import { fade } from '../../configs';
import { zIndex } from '../../zIndex';

export const defaultDelay = 150;

const backgroundOpacity = 0.5;

interface CloseButtonProps {
  colorToggle: boolean;
}

const CloseButton = styled.span<CloseButtonProps>`
  position: fixed;
  right: 25px;
  top: 25px;
  font-size: 45px;
  cursor: pointer;
  transition: 0.1s linear;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;

  ${({ colorToggle }) =>
    colorToggle &&
    css`
      opacity: 1;
    `}
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: ${zIndex.modal};
  overflow: hidden;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) =>
    theme.colors.opacityGray(backgroundOpacity)};
  padding: 0 10px;
`;

const Modal = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: min-content;
  width: 80%;
  overflow: hidden;
  &.entered {
    animation: ${fade} ${defaultDelay}ms linear;
  }
  &.exiting {
    animation: ${fade} ${defaultDelay}ms linear reverse;
  }
`;

export const Styled = {
  ModalWrapper,
  Modal,
  CloseButton,
};
