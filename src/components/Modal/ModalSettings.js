import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setColor, setFont } from './../../redux/modalSlice';
import { theme } from './../styles/theme';
import { Flex } from './../styles/styledElements';

function ModalSettings({ data }) {
    const { title, buttons } = data;
    const dispatch = useDispatch();

    const dispatchData = (font, color) => {
        if (font) {
            dispatch(setFont(font));
        }
        if (color) {
            dispatch(setColor(color));
        }
    };

    const activeColorButton = (id) => {
        buttons.map((button) => {
            if (button.id === id && button.bgcColor !== undefined) {
                return (button.text = '\u2713');
            }
            if (button.id !== id && button.bgcColor !== undefined) {
                return (button.text = '');
            }
        });
    };

    const activeFontButton = (id) => {
        buttons.map((button) => {
            if (button.id === id && button.fontType !== undefined) {
                return (button.active = true);
            }
            if (button.id !== id && button.fontType !== undefined) {
                return (button.active = false);
            }
        });
    };

    const handleClick = (id, font, color) => {
        dispatchData(font, color);
        activeColorButton(id);
        activeFontButton(id);
    };

    const buttonsXml = buttons.map((button) => {
        const { id, text, active, fontType, bgcColor, ariaLabel } = button;

        return (
            <ChangeSettingButton
                highlight={active}
                key={id}
                font={fontType}
                bgc={bgcColor}
                aria-label={ariaLabel}
                onClick={() => handleClick(id, fontType, bgcColor)}
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
    color: ${({ highlight }) =>
        highlight
            ? theme.color.backgroundThird
            : theme.color.backgroundSecondary};
    background-color: ${({ bgc, highlight }) => {
        if (bgc) {
            return theme.color[bgc];
        }
        if (highlight) {
            return theme.color.backgroundSecondary;
        }
        return theme.color.textSecond;
    }};
    font-family: ${({ font }) =>
        font ? theme.font[font].fontFamily : 'inherit'};
    font-weight: ${({ font }) =>
        font ? theme.font[font].fontWeight : 'inherit'};
    margin-left: 1rem;

    &:first-of-type {
        margin-left: 0;
    }
`;

export default ModalSettings;
