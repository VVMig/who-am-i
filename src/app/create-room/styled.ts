import styled, { css } from 'styled-components';

import { StyledCreateRoomProps } from './interfaces';

const CreateRoom = styled.div<StyledCreateRoomProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ isLoading }) =>
    isLoading &&
    css`
      justify-content: center;
    `}

  color: ${({ theme }) => theme.colors.black};
  width: 300px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Title = styled.h2`
  padding-top: 5px;
`;

const MaxParticipants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

const RangeValue = styled.span``;

const MaxParticipantsRange = styled.input.attrs(() => ({
  type: 'range',
}))``;

export const Styled = {
  CreateRoom,
  Title,
  MaxParticipants,
  MaxParticipantsRange,
  RangeValue,
};
