import styled from 'styled-components';

import { pageAppear } from '../../packages';

export const pageAnimationDuration = 300;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.black};

  &.page-enter-active {
    animation: ${pageAppear} ${pageAnimationDuration}ms linear both;
  }
`;

export const Styled = {
  Container,
};
