import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

body{
    background-color: ${theme.color.backgroundPrimary};
    font-family: sans-serif;
    display: grid;
    height: 100vh;
    place-items: center;
}
`;
