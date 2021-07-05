import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { serverUri, wsUri } from './uri';

const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true,
  },
});

const httpLink = createHttpLink({
  uri: serverUri,
  credentials: 'include',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});
