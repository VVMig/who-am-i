import styled from 'styled-components';

import { Button, zIndex } from '../../../../packages';
import { UserIconProps } from '../interfaces';

const Card = styled.div`
  max-width: 200px;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px 50px;
  position: relative;
`;

const CorrectAnswers = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: center;

  * + * {
    margin-left: 2px;
  }
`;

const Answer = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.success};
`;

const CardCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${zIndex.cardCover};
`;

const UserIcon = styled.div<UserIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 68px;
  border-radius: 50%;
  color: ${({ iconColor }) => iconColor};
`;

const PlayerName = styled.h2`
  padding-top: 5px;
  font-size: 28px;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
`;

const GuessNameContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  text-align: center;
`;

const GuessName = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const Finish = styled.h2`
  padding-top: 5px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: lighter;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

const QuestionInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;
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

const QuestionButton = styled(Button)`
  width: 100px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.orange};

  & span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Styled = {
  Card,
  UserIcon,
  PlayerName,
  GuessName,
  GuessNameContainer,
  QuestionInput,
  QuestionButton,
  QuestionContainer,
  CardCover,
  CorrectAnswers,
  Answer,
  Finish,
};
