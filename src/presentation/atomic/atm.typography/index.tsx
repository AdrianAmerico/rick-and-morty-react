import styled from 'styled-components';
import { fontSize } from '../obj.constants';
export * as Typography from '.';

export const Li = styled.li`
list-style: none;
color: ${(props) => props.theme.colors.text};
margin-left: 8%;

:hover {
    cursor: pointer;
    text-decoration: underline;
}

a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
}
`;

export const P = styled.p`
color: ${(props) => props.theme.colors.text};
font-size: ${fontSize.small};
`;

export const Span = styled.span`
color: ${(props) => props.theme.colors.black};
font-size: ${fontSize.xSmall};
font-weight: 400;
`;

export const Error = styled.p`
color: ${(props) => props.theme.colors.red};
font-size: ${fontSize.small};
`;

export const Strong = styled.strong`
color: ${(props) => props.theme.colors.text};
`;
