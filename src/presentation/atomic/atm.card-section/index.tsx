import styled from 'styled-components';
import { spacing } from '../obj.constants';

export const CardSection = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 1rem;
padding: 1rem;
width: 100%;
transition: ease all 250ms;
margin-top: ${spacing.large};
overflow: auto;
`;
