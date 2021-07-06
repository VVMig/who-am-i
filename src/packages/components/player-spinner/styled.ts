import styled from 'styled-components';

import { skBouncedelay } from '../../configs';

const PlayerSpinner = styled.div`
  width: 50px;
  text-align: center;
`;

const LeftBounce = styled.div`
  width: 13px;
  height: 13px;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 100%;
  display: inline-block;
  animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
`;

const MiddleBounce = styled(LeftBounce)`
  animation-delay: 0.16s;
`;

const RightBounce = styled(LeftBounce)`
  animation-delay: 0.32s;
`;

export const Styled = {
  PlayerSpinner,
  LeftBounce,
  RightBounce,
  MiddleBounce,
};
