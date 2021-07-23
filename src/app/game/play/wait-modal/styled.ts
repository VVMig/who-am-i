import styled from 'styled-components';

import { Modal } from '../../../../packages';

const WaitModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
  width: 100%;
  padding: 10px 5px;
  background-color: ${({ theme }) => theme.colors.white};
  height: min-content;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: lighter;
`;

export const Styled = {
  WaitModal,
  Title,
};
