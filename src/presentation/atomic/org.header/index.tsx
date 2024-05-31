import Logo from '@/assets/logo.png';
import { HeaderStyled } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '../atm.typography';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <div>
        <img
          onClick={() => navigate('/')}
          src={Logo}
          alt="Logo do Rick and Morty"
        />

        <ul>
          <Typography.Li>
            <Link to="/">Personagens</Link>
          </Typography.Li>
        </ul>
      </div>
    </HeaderStyled>
  );
};
