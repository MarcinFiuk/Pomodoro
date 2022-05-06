import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { closeModal } from './../../redux/modalSlice';
import { theme } from './../styles/theme';
import IconClose from './../../assets/IconClose';
import { Flex } from './../styles/styledElements';

function ModalHeader() {
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    return (
        <SingleWrapper as='header'>
            <h2 id='dialog_label'>Settings</h2>
            <CloseIconStyle onClick={closeModalHandler} aria-label='close'>
                <IconClose />
            </CloseIconStyle>
        </SingleWrapper>
    );
}

const SingleWrapper = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    padding-bottom: 1.5rem;

    h2 {
        font-size: clamp(1.25rem, 3.7vw, 1.75rem);
        line-height: clamp(1.5625rem, 4.6vw, 2.1875rem);
        color: ${theme.color.backgroundSecondary};
    }
`;

const CloseIconStyle = styled.button`
    border: none;
    background-color: transparent;
`;

export default ModalHeader;
