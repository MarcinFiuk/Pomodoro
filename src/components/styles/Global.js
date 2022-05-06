import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

body{
    background-color: ${theme.color.backgroundPrimary};
    display: grid;
    place-items: center;
    font-family:${({ font }) => theme.font[font].fontFamily};
    font-weight:${({ font }) => theme.font[font].fontWeight};
}
`;
