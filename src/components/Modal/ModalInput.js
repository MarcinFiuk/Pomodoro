import styled from 'styled-components';

import { theme } from './../styles/theme';
import TimerInput from './../Input/TimerInput';
import { Flex } from './../styles/styledElements';

function ModalInput() {
    return (
        <SingleWrapper padding>
            <h3>Time (minutes)</h3>
            <SingleWrapper
                as='form'
                tabletDirection='row'
                gapMobile='0.5rem'
                gapTablet='1.3125rem'
            >
                <TimerInput label='pomodoro' autoFocus />
                <TimerInput label='short break' />
                <TimerInput label='long break' />
            </SingleWrapper>
        </SingleWrapper>
    );
}

const SingleWrapper = styled(Flex)`
    width: 100%;
    text-transform: uppercase;
    padding-block: ${({ padding }) => padding && '1.5rem'};
    gap: ${({ gapMobile }) => gapMobile};

    h3 {
        font-size: clamp(0.6875rem, 2vw, 0.8125rem);
        line-height: clamp(0.875rem, 2.2vw, 1rem);
        color: ${theme.color.backgroundSecondary};
        letter-spacing: 4.23077px;
        margin-bottom: clamp(0.9375rem, 2.25vw, 1.4375rem);
    }

    @media (min-width: 768px) {
        flex-direction: ${({ tabletDirection }) => tabletDirection};
        gap: ${({ gapTablet }) => gapTablet};
    }
`;

export default ModalInput;
