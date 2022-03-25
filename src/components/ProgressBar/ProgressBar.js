import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { theme } from './../styles/theme';
import { useSpring, animated } from 'react-spring';

function ProgressBar({ children, animationPause, animationTime, reset }) {
    const props = useSpring({
        to: { strokeDashoffset: 283 },
        from: { strokeDashoffset: 0 },
        config: { duration: animationTime * 1000 },
        pause: !animationPause,
        loop: true,
        reset: reset,
    });

    return (
        <Container>
            <SvgElement viewBox='0 0 100 100'>
                <GContainer>
                    <Circle cx='50' cy='50' r='50' />
                    <Path
                        d=' M
                        50, 50 m -43, 0 a 43,43 0 1,0 86,0 a 43,43 0 1,0 -86,0 '
                        style={props}
                    />
                </GContainer>
            </SvgElement>
            {children}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: clamp(268px, 45vw, 366px);
    height: clamp(268px, 45vw, 366px);

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: linear-gradient(
            315deg,
            hsl(235, 32%, 27%) 0%,
            hsl(234, 50%, 11%) 100%
        );
        box-shadow: -50px -50px 100px hsl(234, 40%, 25%),
            50px 50px 100px hsl(234, 45%, 13%);
        width: clamp(300px, 50vw, 410px);
        height: clamp(300px, 50vw, 410px);
        border-radius: 50%;
    }
`;

const SvgElement = styled.svg.attrs(({ viewBox }) => viewBox)`
    transform: scaleX(-1);
    border-radius: 50%;
`;

const GContainer = styled.g`
    fill: none;
    stroke: none;
`;

const Circle = styled.circle.attrs(({ cx, cy, r }) => ({
    cx,
    cy,
    r,
}))`
    stroke-width: 2.5px;
    stroke: ${theme.color.backgroundPrimary};
    fill: ${theme.color.backgroundSecondary};
`;

const Path = styled(animated.path).attrs(
    ({ strokeDasharray, strokeDashoffset, d }) => ({
        d,
    })
)`
    stroke-width: 2.75px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    fill-rule: nonzero;
    stroke: currentColor;
    color: ${theme.color.decorationFirst};
    stroke-dasharray: 283;
    stroke-dashoffset: 0;
`;

//NOTE: after one second pass animation must be trigger

export default ProgressBar;
