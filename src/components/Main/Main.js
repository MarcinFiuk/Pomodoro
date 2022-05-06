import styled from 'styled-components';
import { theme } from './../styles/theme';
import { useDispatch } from 'react-redux';

import Timer from '../Timer/Timer';
import ActiveStages from './../ActiveStages/ActiveStages';
import Logo from './../../assets/Logo';
import IconSetting from './../../assets/IconSetting';
import { openModal } from './../../redux/modalSlice';

const Main = () => {
    const dispatch = useDispatch();

    const showModalHandler = () => {
        dispatch(openModal());
    };

    return (
        <MainStyled>
            <h1 aria-label='pomodoro'>
                <Logo />
            </h1>
            <ActiveStages />
            <Timer />
            <SettingButton
                onClick={showModalHandler}
                aria-label='turn on settings'
            >
                <IconSetting />
            </SettingButton>
        </MainStyled>
    );
};

const MainStyled = styled.main`
    min-height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const SettingButton = styled.button`
    background-color: transparent;
    border: none;
`;

export default Main;
