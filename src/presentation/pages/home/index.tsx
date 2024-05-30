import RickAndMorty from '@/assets/rick-and-morty.png';
import { CharactersList } from './components';
import { Header } from '@/presentation/atomic';
import { Main } from './styles';

export const Home = () => {
  return (
    <>
      <Header />

      <Main>
        <img src={RickAndMorty} alt="Imagem do Rick and Morty" />

        <CharactersList />
      </Main>
    </>
  );
};
