import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';
import SwiperCore, { EffectCoverflow, Controller } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { store } from '../../store';
import { PlayerCard } from './player-card/PlayerCard';
import { Styled } from './styled';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

SwiperCore.use([EffectCoverflow, Controller]);

const slideNext = (swiper: SwiperCore) => {
  swiper.allowSlideNext = true;
  swiper.slideNext();
  swiper.allowSlideNext = false;
};

export const Play = observer(() => {
  const [swiper, setSwiper] = useState<SwiperCore | undefined>();

  return (
    <Styled.PlayContainer>
      <Swiper
        onInit={setSwiper}
        effect="coverflow"
        slidesPerView="auto"
        centeredSlides
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
        }}
        loop
        allowSlideNext={false}
        allowSlidePrev={false}
      >
        {store.room.participants.map((participant) => (
          <SwiperSlide key={participant.id}>
            <PlayerCard player={participant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.PlayContainer>
  );
});
