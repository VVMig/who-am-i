import styled, { css } from 'styled-components';

import { StyledCreateRoomProps, StyledRangeValueProps } from './interfaces';

const CreateRoom = styled.div<StyledCreateRoomProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;

  ${({ isLoading }) =>
    isLoading &&
    css`
      justify-content: center;
    `}

  color: ${({ theme }) => theme.colors.black};
  width: 300px;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};

  & > * + * {
    margin-top: 5px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
`;

const MaxParticipants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  width: 100%;
  & > * + * {
    margin-top: 10px;
  }
`;

const MaxParticipantsTitle = styled.div``;

const RangeValueContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;
`;

const RangeValue = styled.div<StyledRangeValueProps>`
  width: 100%;
  position: relative;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${({ leftProcent }) => `${leftProcent}%`};
    width: 30px;
    height: 30px;
    color: #fff !important;
    font-size: 12px;
    transform-origin: center;
    transform: translateX(-50%);
    transition: margin-top 0.15s ease-in-out, opacity 0.15s ease-in-out;
    & span {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #1597ff;
      border-radius: 0 50% 50% 50%;
      transform: rotate(45deg);
      z-index: -1;
    }
  }
`;

const MaxParticipantsRange = styled.input.attrs(() => ({
  type: 'range',
}))`
  outline: 0;
  border: 0;
  border-radius: 500px;
  max-width: 400px;
  width: 100%;
  transition: box-shadow 0.2s ease-in-out;

  &:not(:active) + ${RangeValueContainer} h4 {
    opacity: 0;
    margin-top: -30px;
    pointer-events: none;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    & {
      overflow: hidden;
      height: 30px;
      -webkit-appearance: none;
      background-color: #ddd;
    }

    &::-webkit-slider-runnable-track {
      height: 30px;
      -webkit-appearance: none;
      transition: box-shadow 0.2s ease-in-out;
    }

    &::-webkit-slider-thumb {
      width: 30px;
      -webkit-appearance: none;
      height: 30px;
      cursor: pointer;
      box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 40px #1597ff;
      border-radius: 50%;
      transition: box-shadow 0.2s ease-in-out;
      position: relative;
    }

    &:active::-webkit-slider-thumb {
      background: #fff;
      box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 3px #1597ff;
    }
  }
`;

export const Styled = {
  CreateRoom,
  Title,
  MaxParticipants,
  MaxParticipantsRange,
  RangeValue,
  RangeValueContainer,
  MaxParticipantsTitle,
};
