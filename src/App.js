import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Reset } from './components/styles/Reset';
import { GlobalStyle } from './components/styles/Global';
import { theme } from './components/styles/theme';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';

const App = () => {
    const [style, setStyle] = useState({
        font: 'kumbhSans',
        color: 'decorationSecond',
    });

    const changeStyleHandler = (val) => {
        setStyle((prev) => {
            return { ...prev, ...val };
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyle />
            <Modal
                dynamicStyle={style}
                getStyle={(val) => changeStyleHandler(val)}
            />
            <Main dynamicStyle={style} />
        </ThemeProvider>
    );
};

export default App;
