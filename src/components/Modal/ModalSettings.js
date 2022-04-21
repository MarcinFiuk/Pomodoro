import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setColor, setFont } from './../../redux/modalSlice';
import { theme } from './../styles/theme';
import { Flex } from './../styles/styledElements';

function ModalSettings({ data }) {
    const { title, buttons } = data;
    const dispatch = useDispatch();

    const dispatchData = (font, color) => {
        if (font) dispatch(setFont(font));
        if (color) dispatch(setColor(color));
    };

    const buttonsXml = buttons.map((button) => {
        const { id, text, fontType, bgcColor } = button;

        return (
            <ChangeSettingButton
                key={id}
                font={fontType}
                bgc={bgcColor}
                onClick={() => dispatchData(fontType, bgcColor)}
            >
                {text}
            </ChangeSettingButton>
        );
    });

    return (
        <SingleWrapper padding>
            <h3>{title}</h3>
            <SingleWrapper direction='true'>{buttonsXml}</SingleWrapper>
        </SingleWrapper>
    );
}

const SingleWrapper = styled(Flex)`
    flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
    width: 100%;
    text-transform: uppercase;
    padding-block: ${({ padding }) => padding && '1.5rem'};

    h3 {
        font-size: clamp(0.6875rem, 2vw, 0.8125rem);
        line-height: clamp(0.875rem, 2.2vw, 1rem);
        color: ${theme.color.backgroundSecondary};
        letter-spacing: 4.23077px;
        margin-bottom: 1.125rem;

        @media (min-width: 768px) {
            margin-bottom: 0;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-end;
    }
`;

const ChangeSettingButton = styled.button`
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: ${({ bgc }) =>
        bgc ? theme.color[bgc] : theme.color.textSecond};
    font-family: ${({ font }) =>
        font ? theme.font[font].fontFamily : 'inherit'};
    font-weight: ${({ font }) =>
        font ? theme.font[font].fontWeight : 'inherit'};
    margin-left: 1rem;

    &:first-of-type {
        margin-left: 0;
    }

    &:active {
        background-color: black;
        color: white;
    }
`;

export default ModalSettings;
