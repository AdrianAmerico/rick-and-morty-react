import { useGetCharacters } from '@/domain/hooks/use-get-characters';
import {
  Card,
  CardSection,
  ErrorContent,
  Loading,
  LoadingContent,
  Typography,
} from '@/presentation/atomic';
import { useCustomFilters } from '@/domain/home/use-custom-filters';
import { useNavigate } from 'react-router-dom';

export const CharactersList = () => {
  const { filter } = useCustomFilters();
  const { data, error, loading } = useGetCharacters(filter.name);
  const navigate = useNavigate();

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
      {data?.characters?.results?.map(({ id, image, name, status }) => (
        <Card
          key={id}
          imgSrc={image}
          title={name}
          subtitle={status}
          onClick={() => navigate(`/${id}`)}
        />
      ))}
    </CardSection>
  );
};
