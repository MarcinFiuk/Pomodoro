import styled from 'styled-components';

import { theme } from './../styles/theme';

function Backdrop() {
    return <BackdropStyled />;
}

const BackdropStyled = styled.div`
    position: fixed;
    inset: 0;
    background-color: ${theme.color.backdrop};
    overflow: hidden;
    z-index: 998;
`;
export default Backdrop;
