import { CharacterEpisodes } from '@/data/models';
import {
  Breadcrumbs,
  ErrorContent,
  Loading,
  LoadingContent,
  Table,
  TableContainer,
  Typography,
} from '@/presentation/atomic';

interface CharacterEpisodesListProps {
  character: CharacterEpisodes | undefined;
  loading: boolean;
  error: boolean;
}

export const CharacterEpisodesList = ({
  character,
  loading,
  error,
}: CharacterEpisodesListProps) => {
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
    <>
      <Breadcrumbs
        altImage={character?.name}
        srcImage={character?.image}
        title={character?.name}
        subTitle={character?.status}
      />

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {character?.episode.map(({ id, name }) => (
              <tr key={id}>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};
