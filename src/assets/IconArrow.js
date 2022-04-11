import styled from 'styled-components';

function IconArrow({ direction }) {
    let arrowDirection;

    if (direction === 'up') arrowDirection = 'M1 6l6-4 6 4';
    if (direction === 'down') arrowDirection = 'M1 1l6 4 6-4';

    return (
        <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 7'>
            <path
                fill='none'
                stroke='#1E213F'
                strokeWidth='2'
                d={arrowDirection}
            />
        </Svg>
    );
}

const Svg = styled.svg`
    width: 0.75rem;
    stroke-opacity: 0.25;
`;

export default IconArrow;
