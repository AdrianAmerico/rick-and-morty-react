import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/domain/hooks/use-apollo-client';

interface ApolloProviderProps {
  children: ReactNode;
}

export const ApolloContextProvider = ({ children }: ApolloProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
