import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.black};
`;

export const Styled = {
  Container,
};
