import styled from 'styled-components';

import Timer from '../Timer/Timer';
import ActiveStages from './../ActiveStages/ActiveStages';
import Logo from './../../assets/Logo';
import IconSetting from './../../assets/IconSetting';

const Main = () => {
    return (
        <MainStyled>
            <h1>
                <Logo />
            </h1>
            <ActiveStages />
            <Timer />
            <SettingButton>
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
