import styled, { css } from 'styled-components';

import { pageAppear, pageDisappear } from '../../packages';
import { ContainerProps } from './interfaces';

export const pageAnimationDuration = 300;

const Container = styled.div<ContainerProps>`
  display: grid;
  place-items: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.black};

  &.page-enter-active {
    ${({ isPush }) =>
      isPush
        ? css`
            animation: ${pageAppear} ${pageAnimationDuration}ms linear both;
          `
        : css`
            animation: ${pageDisappear} ${pageAnimationDuration}ms linear
              reverse both;
          `}
  }

  &.page-exit-active {
    ${({ isPush }) =>
      isPush
        ? css`
            animation: ${pageAppear} ${pageAnimationDuration}ms linear reverse
              both;
          `
        : css`
            animation: ${pageDisappear} ${pageAnimationDuration}ms linear both;
          `}
  }
`;

export const Styled = {
  Container,
};
