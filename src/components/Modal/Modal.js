import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { theme } from './../styles/theme';
import TimerInput from './../Input/TimerInput';
import IconClose from './../../assets/IconClose';
import { Flex } from './../styles/styledElements';

function Modal({ dynamicStyle, getStyle }) {
    console.log(theme.font['kumbhSans'].fontFamily);
    const getStyleHandler = (style) => {
        getStyle(style);
    };
    return createPortal(
        <>
            <Backdrop />
            <MainWrapper dynamicFont={dynamicStyle.font}>
                <Wrapper>
                    <SingleWrapper
                        MobileDirection
                        paddingBottom='1.5rem'
                        justifyContent='SB'
                    >
                        <h2>Settings</h2>
                        <CloseIconStyle>
                            <IconClose />
                        </CloseIconStyle>
                    </SingleWrapper>
                    <DecorationElement wide />
                    <SingleWrapper TabletDirection paddingBlock='1.5rem'>
                        <h3>Time (minutes)</h3>
                        <SingleWrapper
                            as='form'
                            gapMobile='0.5rem'
                            gapTablet='1.3125rem'
                        >
                            <TimerInput label='pomodoro' />
                            <TimerInput label='short break' />
                            <TimerInput label='long break' />
                        </SingleWrapper>
                    </SingleWrapper>
                    <DecorationElement />
                    <SingleWrapper paddingBlock='1.5rem'>
                        <h3>Font</h3>
                        <SingleWrapper justifyContent='FE' MobileDirection>
                            <ChangeSettingButton
                                font='kumbhSans'
                                onClick={() =>
                                    getStyleHandler({
                                        font: 'kumbhSans',
                                    })
                                }
                            >
                                Aa
                            </ChangeSettingButton>
                            <ChangeSettingButton
                                font='robotoSlab'
                                onClick={() =>
                                    getStyleHandler({
                                        font: 'robotoSlab',
                                    })
                                }
                            >
                                Aa
                            </ChangeSettingButton>
                            <ChangeSettingButton
                                font='spaceMono'
                                onClick={() =>
                                    getStyleHandler({
                                        font: 'spaceMono',
                                    })
                                }
                            >
                                Aa
                            </ChangeSettingButton>
                        </SingleWrapper>
                    </SingleWrapper>
                    <DecorationElement />
                    <SingleWrapper paddingBlock='1.5rem'>
                        <h3>Color</h3>
                        <SingleWrapper justifyContent='FE' MobileDirection>
                            <ChangeSettingButton
                                color={theme.color.decorationFirst}
                                onClick={() =>
                                    getStyleHandler({
                                        color: 'decorationFirst',
                                    })
                                }
                            >
                                &#10004;
                            </ChangeSettingButton>
                            <ChangeSettingButton
                                color={theme.color.decorationSecond}
                                onClick={() =>
                                    getStyleHandler({
                                        color: 'decorationSecond',
                                    })
                                }
                            ></ChangeSettingButton>
                            <ChangeSettingButton
                                color={theme.color.decorationThird}
                                onClick={() =>
                                    getStyleHandler({
                                        color: 'decorationThird',
                                    })
                                }
                            ></ChangeSettingButton>
                        </SingleWrapper>
                        <ApplyButton dynamicColor={dynamicStyle.color}>
                            Apply
                        </ApplyButton>
                    </SingleWrapper>
                </Wrapper>
            </MainWrapper>
        </>,
        document.getElementById('modal')
    );
}

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background-color: ${theme.color.backdrop};
    overflow: hidden;
    z-index: 998;
`;

const MainWrapper = styled.div`
    position: absolute;
    top: 10%;
    left: calc((100% - clamp(327px, 71vw, 540px)) / 2);
    font-family: ${({ dynamicFont }) => theme.font[dynamicFont].fontFamily};
    font-weight: ${({ dynamicFont }) => theme.font[dynamicFont].fontWeight};
    z-index: 999;
`;

const Wrapper = styled(Flex)`
    width: clamp(327px, 71vw, 540px);
    background-color: white;
    padding-block: clamp(1.5rem, 4.5vw, 2.125rem);
    padding-inline: clamp(1.5rem, 5.2vw, 2.5rem);
    border-radius: clamp(0.9375rem, 3.25vw, 1.5625rem);
    overflow: hidden;
`;

const SingleWrapper = styled(Flex)`
    flex-direction: ${({ MobileDirection }) =>
        MobileDirection ? 'row' : 'column'};
    justify-content: ${({ justifyContent }) =>
        justifyContent === 'SB' ? 'space-between' : 'center'};
    width: 100%;

    text-transform: uppercase;
    padding-block: ${({ paddingBlock }) => paddingBlock};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
    gap: ${({ gapMobile }) => gapMobile};

    h2 {
        font-size: clamp(1.25rem, 3.7vw, 1.75rem);
        line-height: clamp(1.5625rem, 4.6vw, 2.1875rem);
        color: ${theme.color.backgroundSecondary};
    }

    h3 {
        font-size: clamp(0.6875rem, 2vw, 0.8125rem);
        line-height: clamp(0.875rem, 2.2vw, 1rem);
        color: ${theme.color.backgroundSecondary};
        letter-spacing: 4.23077px;
        margin-bottom: 1.125rem;
    }

    @media (min-width: 768px) {
        flex-direction: ${({ TabletDirection }) =>
            TabletDirection ? 'column' : 'row'};
        gap: ${({ gapTablet }) => gapTablet};
        justify-content: ${({ justifyContent }) =>
            justifyContent === 'FE'
                ? 'flex-end'
                : 'SB'
                ? 'space-between'
                : 'center'};
    }
`;

const CloseIconStyle = styled.button`
    border: none;
    background-color: transparent;
`;

const DecorationElement = styled.span`
    width: 100%;
    transform: ${({ wide }) => (wide ? 'scaleX(1.5)' : '')};
    height: 1px;
    background-color: hsla(0, 2%, 89%, 1);
`;

const ChangeSettingButton = styled.button`
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: ${({ color }) => color || theme.color.textSecond};
    font-family: ${({ font }) =>
        (font && theme.font[font].fontFamily) || 'inherit'};
    /* font-weight: {({ font }) => theme.font[font].fontWeight}; */
    margin-left: 1rem;

    &:first-of-type {
        margin-left: 0;
    }
`;

const ApplyButton = styled.button`
    position: absolute;
    left: 50%;
    bottom: -28px;
    transform: translateX(-50%);
    border: none;
    border-radius: 26.5px;
    background-color: ${({ dynamicColor }) => theme.color[dynamicColor]};
    font-size: 1rem;
    line-height: 20px;
    color: ${theme.color.backgroundThird};
    padding: 18px 47px;
`;

export default Modal;
