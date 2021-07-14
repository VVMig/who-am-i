import styled from 'styled-components';

const PlayContainer = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  justify-content: center;

  & .swiper-container {
    max-width: 500px;
    width: 100%;
  }

  & .swiper-slide {
    max-width: 200px;
    width: 100%;
  }

  & .swiper-slide-shadow {
    &-left,
    &-right {
      background-image: none;
    }
  }
`;

export const Styled = {
  PlayContainer,
};
