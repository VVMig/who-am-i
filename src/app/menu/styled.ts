import styled from 'styled-components';

const Menu = styled.div`
  height: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const SelectMenu = styled.div`
  padding: 25px 0 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  * + * {
    margin-top: 10px;
  }
`;

export const Styled = {
  Menu,
  TitleWrapper,
  Title,
  SelectMenu,
};
