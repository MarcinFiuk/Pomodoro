import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import store from './redux/';
import { Reset } from './components/styles/Reset';
import { GlobalStyle } from './components/styles/Global';
import { theme } from './components/styles/theme';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Reset />
                <GlobalStyle />
                <Modal />
                <Main />
            </Provider>
        </ThemeProvider>
    );
};

export default App;
