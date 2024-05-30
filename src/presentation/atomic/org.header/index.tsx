import Logo from '@/assets/logo.png';
import { HeaderStyled } from './styles';

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img src={Logo} alt="Logo do Rick and Morty" />

        <ul>
          <li>Personagens</li>
          <li>Localização</li>
          <li>Episódios</li>
        </ul>
      </div>
    </HeaderStyled>
  );
};
