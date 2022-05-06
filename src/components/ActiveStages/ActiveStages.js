import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { theme } from './../styles/theme';

function ActiveStages() {
    const color = useSelector((state) => state.modal.bgcColor);
    const index = useSelector((state) => state.modal.indexOfActiveElement);

    const intervalOrder = [
        'pomodoro',
        'shortBreak',
        'pomodoro',
        'shortBreak',
        'pomodoro',
        'shortBreak',
        'pomodoro',
        'longBreak',
    ];

    return (
        <StagesWrapper>
            <SimpleStage
                active={intervalOrder[index] === 'pomodoro'}
                color={color}
            >
                Pomodoro
            </SimpleStage>
            <SimpleStage
                active={intervalOrder[index] === 'shortBreak'}
                color={color}
            >
                Short Break
            </SimpleStage>
            <SimpleStage
                active={intervalOrder[index] === 'longBreak'}
                color={color}
            >
                Long Break
            </SimpleStage>
        </StagesWrapper>
    );
}

const StagesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${theme.color.backgroundSecondary};
    width: clamp(20rem, 49vw, 23rem);
    padding: 0.5em;
    border-radius: 2em;
`;

const SimpleStage = styled.span`
    width: 7.5rem;
    padding-block: 1rem;
    text-align: center;
    border-radius: 2rem;
    font-size: 0.875rem;
    line-height: 1rem;
    color: ${({ active }) =>
        active ? theme.color.backgroundPrimary : theme.color.textFirst};

    background-color: ${({ active, color }) =>
        active ? theme.color[color] : 'transparent'};
`;

export default ActiveStages;
