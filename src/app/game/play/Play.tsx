import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import SwiperCore, { EffectCoverflow, Controller } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ConfirmModal } from '../../../packages';
import { ANSWER_SEND } from '../../query';
import { store } from '../../store';
import { PlayerCard } from './player-card/PlayerCard';
import { Styled } from './styled';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

SwiperCore.use([EffectCoverflow, Controller]);

const slideNext = (swiper: SwiperCore, index: number) => {
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;

  swiper.slideTo(index);

  swiper.allowSlideNext = false;
  swiper.allowSlidePrev = false;
};

export const Play = observer(() => {
  const [swiper, setSwiper] = useState<SwiperCore | undefined>();
  const [sendAnswer] = useMutation(ANSWER_SEND);

  const initialSlide = (swiper: SwiperCore) => {
    setSwiper(swiper);

    slideNext(swiper, store.room.currentPlayerIndex);
  };

  const onClickAnswer = async (answer: boolean) => {
    try {
      await sendAnswer({
        variables: {
          answer,
        },
      });
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  useEffect(() => {
    if (swiper) {
      slideNext(swiper, store.room.currentPlayerIndex);
    }
  }, [store.room.step]);

  return (
    <Styled.PlayContainer>
      <Swiper
        onInit={initialSlide}
        effect="coverflow"
        slidesPerView="auto"
        centeredSlides
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
        }}
        allowSlideNext={false}
        allowSlidePrev={false}
      >
        {store.room.participants.map((participant) => (
          <SwiperSlide key={participant.id}>
            {({ isActive }) => (
              <PlayerCard player={participant} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {store.room.questionText && (
        <ConfirmModal
          onClickConfirm={() => onClickAnswer(true)}
          onClickDenied={() => onClickAnswer(false)}
          text={store.room.questionText}
        />
      )}
    </Styled.PlayContainer>
  );
});
