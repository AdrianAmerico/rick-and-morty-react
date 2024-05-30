import { cache } from '@/data/graphql/client-cache';
import { ApolloClient } from '@apollo/client';

export const client = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});
