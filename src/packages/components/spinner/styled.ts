import styled from 'styled-components';

import { ldsEllipsis1, ldsEllipsis2, ldsEllipsis3 } from '../../configs';

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.lightBlue};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: 8px;
    animation: ${ldsEllipsis1} 0.6s infinite;
  }

  & div:nth-child(2) {
    left: 8px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }

  & div:nth-child(3) {
    left: 32px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }

  & div:nth-child(4) {
    left: 56px;
    animation: ${ldsEllipsis3} 0.6s infinite;
  }
`;

export const Styled = {
  Spinner,
};
