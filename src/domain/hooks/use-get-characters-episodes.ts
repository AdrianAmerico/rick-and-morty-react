import { useQuery } from '@apollo/client';
import { GET_CHARACTER_EPISODES } from '@/data/graphql/queries';
import { CharacterEpisodes } from '@/data/models';

interface GetCharactersEpisodesData {
  charactersByIds: CharacterEpisodes[];
}

export const useGetCharactersEpisodes = (id: string) => {
  const { loading, error, data } = useQuery<GetCharactersEpisodesData>(
    GET_CHARACTER_EPISODES,
    {
      variables: { ids: [id] },
    }
  );

  return { loading, error, data };
};
