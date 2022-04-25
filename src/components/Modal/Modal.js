import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import FocusTrap from 'focus-trap-react';

import { closeModal, setFinalProperties } from './../../redux/modalSlice';
import { theme } from './../styles/theme';
import { font, color } from './modalSettingData';
import Backdrop from './Backdrop';
import ModalHeader from './ModalHeader';
import ModalInput from './ModalInput';
import ModalSettings from './ModalSettings';

function Modal() {
    const showModal = useSelector((state) => state.modal.showModal);
    const decorationColor = useSelector((state) => state.modal.bgcColor);
    const temporary = useSelector((state) => state.modal.temporary);
    const dispatch = useDispatch();

    useEffect(() => {
        const closeModalHandler = (e) => {
            if (e.key === 'Escape' && showModal) {
                dispatch(closeModal());
            }
        };

        document.addEventListener('keydown', closeModalHandler);

        return () => document.removeEventListener('keydown', closeModalHandler);
    }, [dispatch, showModal]);

    const acceptAndCloseModalHandler = () => {
        dispatch(setFinalProperties(temporary));
        dispatch(closeModal());
    };

    return (
        showModal &&
        createPortal(
            <>
                <Backdrop />
                <FocusTrap>
                    <MainWrapper>
                        <Wrapper>
                            <ModalHeader />
                            <DecorationElement wide />
                            <ModalInput />
                            <DecorationElement />
                            <ModalSettings data={font} />
                            <DecorationElement />
                            <ModalSettings data={color} />
                        </Wrapper>
                        <ApplyButton
                            bgcColor={decorationColor}
                            type='submit'
                            onClick={acceptAndCloseModalHandler}
                        >
                            Apply
                        </ApplyButton>
                    </MainWrapper>
                </FocusTrap>
            </>,
            document.getElementById('modal')
        )
    );
}

const MainWrapper = styled.div`
    position: absolute;
    top: 10%;
    left: calc((100% - clamp(327px, 71vw, 540px)) / 2);
    z-index: 999;
`;

const Wrapper = styled.div`
    width: clamp(327px, 71vw, 540px);
    background-color: ${theme.color.backgroundThird};
    padding-block: clamp(1.5rem, 3.6vw, 2.125rem);
    padding-inline: clamp(1.5rem, 3.6vw, 2.5rem);
    border-radius: clamp(0.9375rem, 3.25vw, 1.5625rem);
    overflow: hidden;
`;

const DecorationElement = styled.span`
    display: block;
    width: 100%;
    transform: ${({ wide }) => (wide ? 'scaleX(1.5)' : '')};
    height: 1px;
    background-color: hsla(0, 2%, 89%, 1);
`;

const ApplyButton = styled.button`
    position: absolute;
    left: 50%;
    bottom: -28px;
    transform: translateX(-50%);
    border: none;
    border-radius: 26.5px;
    background-color: ${({ bgcColor }) => theme.color[bgcColor]};
    font-size: 1rem;
    line-height: 20px;
    color: ${theme.color.backgroundThird};
    padding: 18px 47px;
`;

export default Modal;
