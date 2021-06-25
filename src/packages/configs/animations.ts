import { keyframes } from 'styled-components';

export const rotate = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
`;

export const pageAppear = keyframes`
  0% {
    position: absolute;
    width: 100%;
    transform: translate(100%, 0);
  }
  50% {
    transform: translate(60%, 0);
  }
  100% {
    position: absolute;
    width: 100%;

    transform: translate(0, 0);

  }
`;

export const pageDisappear = keyframes`
  0% {
    position: absolute;
    width: 100%;
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-40%, 0);
  }
  100% {
    position: absolute;
    width: 100%;
    transform: translate(-100%, 0);
  }
`;

export const appearSide = keyframes`
  0% {
    overflow: hidden;
    width: 0px;
    opacity: 0;
  }
  100% {
    overflow: hidden;
    width: 100px;
    opacity: 1;
  }
`;

export const storm = keyframes`
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
`;

export const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;
