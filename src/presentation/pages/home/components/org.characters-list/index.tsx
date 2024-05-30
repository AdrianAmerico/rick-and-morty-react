import { useGetCharacters } from '@/domain/hooks/use-get-characters';
import { Card, CardSection, Loading, Typography } from '@/presentation/atomic';
import { ErrorContent, LoadingContent } from './styles';
import { useCustomFilters } from '@/domain/home/use-custom-filters';

export const CharactersList = () => {
  const { filter, handleUpdateFilter } = useCustomFilters();
  const { data, error, loading } = useGetCharacters(filter.name);

  if (loading)
    return (
      <LoadingContent>
        <Loading />
      </LoadingContent>
    );

  if (error)
    return (
      <ErrorContent>
        <Typography.Error>
          Ocorreu um erro ao exibir a listagem de dados.
        </Typography.Error>
      </ErrorContent>
    );

  return (
    <CardSection>
      {data?.characters?.results?.map((character) => (
        <Card
          key={character.id}
          imgSrc={character.image}
          title={character.name}
          subtitle={character.status}
        />
      ))}
    </CardSection>
  );
};
