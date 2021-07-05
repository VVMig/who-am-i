import React from 'react';

import { useSubscription } from '@apollo/client';

import { NEW_GAMEUSER } from '../query';

export const Game = () => {
  const { data } = useSubscription(NEW_GAMEUSER);

  return <>{JSON.stringify(data)}</>;
};
