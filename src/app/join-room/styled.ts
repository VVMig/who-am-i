import styled from 'styled-components';

const JoinRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;
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
  text-transform: capitalize;
`;

const RoomIdInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 5px;
  margin: 10px 0;
  transition: 0.2s linear;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
    outline: 0;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const Styled = {
  JoinRoom,
  RoomIdInput,
  Title,
};
