import styled from 'styled-components';
import { theme } from './../styles/theme';

function ActiveStages() {
    return (
        <StagesWrapper>
            <SimpleStage active>Pomodoro</SimpleStage>
            <SimpleStage>Short Break</SimpleStage>
            <SimpleStage>Long Break</SimpleStage>
        </StagesWrapper>
    );
}

const StagesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${theme.color.backgroundSecondary};
    width: clamp(20.5rem, 49vw, 23.25rem);
    padding: 0.5em;
    border-radius: 2em;
    z-index: 1;
`;

const SimpleStage = styled.div`
    width: 7.5rem;
    padding-block: 1rem;
    text-align: center;
    border-radius: 1.66rem;
    font-size: 0.875rem;
    line-height: 1rem;
    color: ${({ active }) =>
        active ? theme.color.backgroundPrimary : theme.color.textFirst};

    background-color: ${({ active }) =>
        active ? theme.color.decorationFirst : 'transparent'};
    font-family: ${theme.font.kumbhSans.fontFamily};
    font-weight: ${theme.font.kumbhSans.fontWeight};
`;

export default ActiveStages;
