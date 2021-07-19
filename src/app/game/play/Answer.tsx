import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';

import { ConfirmModal } from '../../../packages';
import { ANSWER_SEND } from '../../query';
import { store } from '../../store';
import { WaitModal } from './wait-modal/WaitModal';

export const Answer = observer(() => {
  const [isModal, setIsModal] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [sendAnswer] = useMutation(ANSWER_SEND);

  useEffect(() => {
    setIsModal(!!store.room.questionText);
    setIsAnswered(false);
  }, [store.room.questionText]);

  const onClickAnswer = async (answer: boolean) => {
    try {
      setIsAnswered(true);
      await sendAnswer({
        variables: {
          answer,
        },
      });
    } catch (error) {
      store.error.setError(error.message);
    }
  };

  return isModal ? (
    store.room.currentPlayer.id !== store.gameUser?.id && !isAnswered ? (
      <ConfirmModal
        onClickConfirm={() => onClickAnswer(true)}
        onClickDenied={() => onClickAnswer(false)}
        text={store.room.questionText}
      />
    ) : (
      <WaitModal />
    )
  ) : null;
});
