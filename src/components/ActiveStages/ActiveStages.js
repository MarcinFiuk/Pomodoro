import styled from 'styled-components';
import { theme } from './../styles/theme';

function ActiveStages({ dynamicColor }) {
    return (
        <StagesWrapper>
            <SimpleStage active dynamicColor={dynamicColor}>
                Pomodoro
            </SimpleStage>
            <SimpleStage dynamicColor={dynamicColor}>Short Break</SimpleStage>
            <SimpleStage dynamicColor={dynamicColor}>Long Break</SimpleStage>
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
    border-radius: 1.5rem;
    font-size: 0.875rem;
    line-height: 1rem;
    color: ${({ active }) =>
        active ? theme.color.backgroundPrimary : theme.color.textFirst};

    background-color: ${({ active, dynamicColor }) =>
        active ? theme.color[dynamicColor] : 'transparent'};
`;

export default ActiveStages;
