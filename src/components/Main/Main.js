import styled from 'styled-components';
import { theme } from './../styles/theme';

import Timer from '../Timer/Timer';
import ActiveStages from './../ActiveStages/ActiveStages';
import Logo from './../../assets/Logo';
import IconSetting from './../../assets/IconSetting';

const Main = ({ dynamicStyle }) => {
    return (
        <MainStyled dynamicFont={dynamicStyle.font}>
            <h1>
                <Logo />
            </h1>
            <ActiveStages dynamicColor={dynamicStyle.color} />
            <Timer dynamicColor={dynamicStyle.color} />
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
    font-family: ${({ dynamicFont }) => theme.font[dynamicFont].fontFamily};
    font-weight: ${({ dynamicFont }) => theme.font[dynamicFont].fontWeight};
`;

const SettingButton = styled.button`
    background-color: transparent;
    border: none;
`;

export default Main;
