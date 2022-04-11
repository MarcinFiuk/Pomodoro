import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

body{
    background-color: ${theme.color.backgroundPrimary};
    display: grid;
    place-items: center;
}
`;
