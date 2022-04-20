import React from 'react';
import styled from 'styled-components';
import { theme } from './../styles/theme';
import IconClose from './../../assets/IconClose';
import { Flex } from './../styles/styledElements';

function ModalHeader() {
    return (
        <SingleWrapper as='header' paddingBottom='1.5rem'>
            <h2>Settings</h2>
            <CloseIconStyle>
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
    gap: ${({ gapMobile }) => gapMobile};

    h2 {
        font-size: clamp(1.25rem, 3.7vw, 1.75rem);
        line-height: clamp(1.5625rem, 4.6vw, 2.1875rem);
        color: ${theme.color.backgroundSecondary};
    }

    @media (min-width: 768px) {
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

export default ModalHeader;
