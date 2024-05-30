import { createGlobalStyle } from 'styled-components';
import { fontFamily, fontSize, lineHeight } from '../obj.constants';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    
    *:focus {
    outline: none;
    }
}

html, body, #root {
    min-height: 100%;
}
body {
    background: ${(props) => props.theme.colors.background_primary};
    font-size: ${fontSize.small};
    color: ${(props) => props.theme.colors.text};
    font-family: ${fontFamily};
    line-height: ${lineHeight.small};
}
`;
