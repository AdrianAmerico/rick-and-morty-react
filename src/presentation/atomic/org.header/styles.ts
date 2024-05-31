import styled from 'styled-components';
import { spacing } from '../obj.constants';

export const HeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;

  img {
    cursor: pointer;
  }

  > div {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
    gap: ${spacing.large};
  }
`;
