import styled from 'styled-components';
import { theme } from './../styles/theme';
import { Flex } from './../styles/styledElements';
import IconArrow from '../../assets/IconArrow';

const TimerInput = (props) => {
    const { label, ...rest } = props;

    return (
        <Container>
            <Label htmlFor={label}>{label}</Label>
            <PositioningElement>
                <Input
                    type='number'
                    id={label}
                    min='0'
                    max='60'
                    {...rest}
                    pattern='[1-9]|[1-5][0-9]|60'
                />
                <span>
                    <IconArrow direction='up' />
                    <IconArrow direction='down' />
                </span>
            </PositioningElement>
        </Container>
    );
};

const Container = styled(Flex)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const PositioningElement = styled.div`
    position: relative;
    width: 140px;

    span {
        position: absolute;
        top: 3px;
        right: 2px;
        display: grid;
        place-items: center;
        padding-block: 0.5rem;
        width: calc(12px + 2rem);
        height: calc(100% - 6px);
        pointer-events: none;
        background-color: ${theme.color.textSecond};
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    &:hover > span > svg {
        stroke-opacity: 1;
    }
`;

const Label = styled.label`
    font-size: 12px;
    line-height: 15px;
    text-transform: lowercase;
    color: ${theme.color.backgroundPrimary};
    opacity: 0.4;

    @media (min-width: 768px) {
        margin-bottom: 0.625rem;
    }
`;

const Input = styled.input`
    position: relative;
    width: 100%;
    background-color: ${theme.color.textSecond};
    border-radius: 10px;
    border: none;
    padding-inline: 1rem;
    padding-block: 11px;
    font-size: 14px;
    line-height: 15px;
    border: 2px solid transparent;

    &:focus {
        outline: none;
        border: 2px solid black;
    }
`;
export default TimerInput;
