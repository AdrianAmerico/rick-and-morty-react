import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharactersEpisodes } from '@/domain/hooks';
import { Header } from '@/presentation/atomic';
import { CharacterEpisodesList } from './org.character-episodes-list';
import { Main } from '../home/styles';

export const CharacterDetails = () => {
  const params = useParams<{ id: string }>();
  const { data, error, loading } = useGetCharactersEpisodes(params.id || '');

  const character = useMemo(() => {
    return data?.charactersByIds?.find((character) => character);
  }, [data]);

  return (
    <>
      <Header />

      <Main>
        <CharacterEpisodesList
          character={character}
          error={!!error}
          loading={loading}
        />
      </Main>
    </>
  );
};
