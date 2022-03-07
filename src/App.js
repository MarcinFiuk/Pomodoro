import { ThemeProvider } from 'styled-components';

import { Reset } from './components/styles/Reset';
import { GlobalStyle } from './components/styles/Global';
import { theme } from './components/styles/theme';
import Main from './components/Main/Main';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyle />
            <Main />
        </ThemeProvider>
    );
};

export default App;
