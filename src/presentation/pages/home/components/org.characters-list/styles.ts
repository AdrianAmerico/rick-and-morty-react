import { fontSize, spacing } from '@/presentation/atomic';
import styled from 'styled-components';

export const LoadingContent = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const ErrorContent = styled.div`
height: 100%;
margin-top: calc(${spacing.large} + 2rem);

p {
    font-size: ${fontSize.large};
}
`;
