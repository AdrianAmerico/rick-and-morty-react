import styled from 'styled-components';
import { spacing } from '../obj.constants';

export const CardContent = styled.div<{ onClick?: Function }>`
display: flex;
flex-direction: column;
border-radius: ${spacing.small};
padding: ${spacing.small};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

img {
  object-fit: cover;
  margin-bottom: ${spacing.small};
}

strong {
  line-height: 1.5;
}

${({ onClick }) =>
  onClick &&
  `
  cursor: pointer;
  transition: ease all 250ms;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.1);
  }
`}
`;
