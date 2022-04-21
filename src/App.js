import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { Reset } from './components/styles/Reset';
import { GlobalStyle } from './components/styles/Global';
import { theme } from './components/styles/theme';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';

const App = () => {
    const font = useSelector((state) => state.modal.font);

    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyle font={font} />
            <Modal />
            <Main />
        </ThemeProvider>
    );
};

export default App;
