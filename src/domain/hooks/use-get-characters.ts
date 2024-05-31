import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '@/data/graphql/queries';
import { CharacterEpisodes } from '@/data/models';

interface GetCharactersData {
  characters: {
    results: CharacterEpisodes[];
  };
}

export const useGetCharacters = (searchTerm: string) => {
  const { loading, error, data } = useQuery<GetCharactersData>(GET_CHARACTERS, {
    variables: { name: searchTerm },
  });

  return { loading, error, data };
};
